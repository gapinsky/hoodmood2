const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = new Map();
const sent = [];

// Tak jak pozostałe check-*.cjs: uruchom kod TS bez dodatkowego runnera.
function load(relative) {
  let file = path.resolve(root, relative);
  if (!path.extname(file)) file = fs.existsSync(`${file}.ts`) ? `${file}.ts` : path.join(file, 'index.ts');
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const localRequire = (name) => {
    if (name === 'server-only') return {};
    if (name === 'resend') return { Resend: class { emails = { send: async (mail) => { sent.push(mail); return { data: { id: 'test' } }; } }; } };
    if (name.startsWith('@/')) return load(name.slice(2));
    if (name.startsWith('.')) return load(path.resolve(path.dirname(file), name));
    return require(name);
  };
  vm.runInThisContext(`(function(require,module,exports){${code}\n})`, { filename: file })(localRequire, module, module.exports);
  return module.exports;
}

const { normalizePhoneNumber } = load('lib/phone');
for (const phone of ['577198599', '577 198 599', '+48 577 198 599']) {
  assert.equal(normalizePhoneNumber(phone, 'PL'), '+48577198599');
}
assert.equal(normalizePhoneNumber('151 23456789', 'DE'), '+4915123456789');
for (const phone of ['', '123', '577198599123456789', '111111111', 'tekst 577198599', '+49 15123456789']) {
  assert.equal(normalizePhoneNumber(phone, 'PL'), null, phone);
}
assert.equal(normalizePhoneNumber('577198599', 'XX'), null);

const { enrollmentRequestSchema } = load('lib/schemas/enrollmentSchema');
const { contactFormSchema } = load('lib/schemas/contactSchema');
const { getEnrollmentClasses, resolveEnrollmentSelection, matchesEnrollmentParticipant } = load('lib/data-adapters/enrollment-classes');
const { classList } = load('data/classess');
const { isPricingCategory } = load('myComponents/pricing/types');
for (const value of ['__proto__', 'constructor', 'toString', '', 'ZAJECIA', 'invalid']) assert.equal(isPricingCategory(value), false);
for (const value of ['zajecia', 'pakiety-zajec', 'zajecia-indywidualne']) assert.equal(isPricingCategory(value), true);

const item = getEnrollmentClasses().find((entry) => entry.maxAge === null && entry.minAge <= 30);
assert.ok(item);
const request = {
  participantFullName: 'Jan Kowalski', participantType: 'adult', participantAge: '30',
  isHoodmoodMember: false, selectedLocationId: item.locationId,
  selectedClasses: [{ classId: item.id }], parentFullName: 'Jan Kowalski',
  email: 'jan@example.com', phoneCountry: 'PL', phone: '577 198 599', consentsAccepted: true,
};
const contact = { fullName: 'Jan Kowalski', email: request.email, phoneCountry: 'PL', phone: request.phone, message: 'Wiadomość testowa', termsAccepted: true };
for (const [schema, data] of [[enrollmentRequestSchema, request], [contactFormSchema, contact]]) {
  assert.ok(schema.safeParse(data).success);
  for (const phone of ['', '123', '111111111', '577198599123456789']) assert.equal(schema.safeParse({ ...data, phone }).success, false);
  assert.equal(schema.safeParse({ ...data, phoneCountry: 'XX' }).success, false);
  assert.ok(schema.safeParse({ ...data, phoneCountry: 'DE', phone: '151 23456789' }).success);
}
for (const age of ['', '12abc', '30.5', '-1']) assert.equal(enrollmentRequestSchema.safeParse({ ...request, participantAge: age }).success, false);
for (const age of [11, 12, 18, 30, 50]) {
  assert.equal(matchesEnrollmentParticipant({ ...item, minAge: 12, maxAge: null }, age < 18 ? 'youth' : 'adult', String(age)), age >= 12);
}
assert.equal(matchesEnrollmentParticipant({ ...item, minAge: 40, maxAge: null }, 'adult', '30'), false);
assert.equal(matchesEnrollmentParticipant({ ...item, minAge: 18, maxAge: 25 }, 'adult', '30'), false);
for (const entry of getEnrollmentClasses()) {
  for (const age of [11, 12, 18, 30, 50]) {
    assert.equal(matchesEnrollmentParticipant(entry, age < 18 ? 'youth' : 'adult', String(age)), age >= entry.minAge && (entry.maxAge === null || age <= entry.maxAge), `${entry.name}: ${age}`);
  }
}
const trusted = resolveEnrollmentSelection(request)[0];
const tampered = { ...request, selectedClasses: [{ classId: item.id, price: 0, classTypeName: 'FAKE', billingPeriod: 'FAKE' }] };
assert.deepEqual(resolveEnrollmentSelection(enrollmentRequestSchema.parse(tampered))[0], trusted);
assert.equal(resolveEnrollmentSelection({ ...request, selectedClasses: [{ classId: 'fake' }] }), null);
assert.equal(resolveEnrollmentSelection({ ...request, selectedClasses: [request.selectedClasses[0], request.selectedClasses[0]] }), null);
assert.equal(resolveEnrollmentSelection({ ...request, selectedLocationId: 'wrong-location' }), null);
const source = classList.find((entry) => entry.id === item.classId);
for (const flag of ['active', 'enrollmentEnabled']) {
  const original = source[flag];
  source[flag] = false;
  try { assert.equal(resolveEnrollmentSelection(request), null); } finally { source[flag] = original; }
}
const variants = getEnrollmentClasses().filter((entry) => entry.classId === item.classId);
if (variants.length > 1) assert.equal(resolveEnrollmentSelection({ ...request, selectedClasses: variants.map((entry) => ({ classId: entry.id })) }), null);

(async () => {
  const { submitEnrollmentForm } = load('app/zapisz-sie/actions');
  for (const selectedClasses of [[{ classId: 'fake' }], [request.selectedClasses[0], request.selectedClasses[0]]]) {
    assert.equal((await submitEnrollmentForm({ ...request, selectedClasses })).success, false);
    assert.equal(sent.length, 0);
  }
  assert.equal((await submitEnrollmentForm(tampered)).success, true);
  assert.equal(sent.length, 2);
  for (const mail of sent) {
    assert.ok(mail.html.includes('+48577198599'));
    assert.ok(!mail.html.includes('FAKE'));
    assert.ok(mail.html.includes(trusted.price.toFixed(2).replace('.', ',')));
  }
  sent.length = 0;
  const { submitContactForm } = load('app/kontakt/actions');
  assert.equal((await submitContactForm({ ...contact, phoneCountry: 'DE', phone: '151 23456789' })).success, true);
  assert.equal(sent.length, 2);
  for (const mail of sent) assert.ok(mail.html.includes('+4915123456789'));
  console.log('PASS: telefony PL/DE i błędy, oba schematy, zaufane ceny i maile, fałszywe ID, duplikaty, aktywność, lokalizacja, zakresy wieku, kategorie cennika.');
})().catch((error) => { console.error(error); process.exitCode = 1; });

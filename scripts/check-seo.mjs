import assert from 'node:assert/strict';

// Run against a production build: node scripts/check-seo.mjs http://localhost:3100
const server = process.argv[2] || 'http://localhost:3100';
const expectedOrigin = process.argv[3] || 'https://hoodmood.pl';
const headers = { 'User-Agent': 'Googlebot' };
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
const attr = (tag, name) => decode(tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1] || '');
const metas = (html, key) => [...html.matchAll(/<meta\b[^>]*>/g)]
  .map(([tag]) => tag).filter((tag) => attr(tag, 'name') === key || attr(tag, 'property') === key)
  .map((tag) => attr(tag, 'content'));
const canonicals = (html) => [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => tag)
  .filter((tag) => attr(tag, 'rel') === 'canonical').map((tag) => attr(tag, 'href'));
const get = (path) => fetch(new URL(path, server), { headers, redirect: 'manual' });
const sitemap = await get('/sitemap.xml');
assert.equal(sitemap.status, 200);
const xml = await sitemap.text();
assert(!xml.includes('<lastmod>'), 'Sitemap must not invent update dates');
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => decode(url));
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap entries');
assert(urls.length > 30, 'Missing sitemap routes');
const paths = urls.map((url) => new URL(url).pathname);
for (const path of ['/oferta/szczecinek', '/grafik/szczecinek', '/cennik/szczecinek', '/kadra/julia-kaczmarzyk', '/', '/kontakt', '/dofinansowanie', '/zapisz-sie', '/oferta/koszalin', '/oferta/polanow', '/oferta/bialy-bor', '/grafik/koszalin', '/cennik/koszalin/zajecia', '/cennik/koszalin/pakiety-zajec', '/cennik/koszalin/zajecia-indywidualne', '/cennik/bialy-bor', '/cennik/polanow']) {
  assert(paths.includes(path), `Missing ${path}`);
}
assert(!paths.includes('/cennik') && !paths.includes('/cennik/koszalin'));
const results = [];
const images = new Set();
for (const url of urls) {
  assert.equal(new URL(url).origin, expectedOrigin);
  const path = new URL(url).pathname;
  const response = await get(path);
  assert.equal(response.status, 200, `${path} status`);
  const html = await response.text();
  assert.deepEqual(canonicals(html), [url], `${path} canonical`);
  assert.deepEqual(metas(html, 'og:url'), [url], `${path} OG URL`);
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || '');
  const description = metas(html, 'description')[0];
  assert(title && description && description.length <= 160, `${path} title/description`);
  assert.deepEqual(metas(html, 'og:title'), [title]);
  assert.deepEqual(metas(html, 'twitter:title'), [title]);
  assert.deepEqual(metas(html, 'og:description'), [description]);
  assert.deepEqual(metas(html, 'twitter:description'), [description]);
  assert.deepEqual(metas(html, 'twitter:card'), ['summary_large_image']);
  for (const key of ['og:image', 'twitter:image']) {
    const image = metas(html, key)[0];
    assert(image, `${path} missing ${key}`);
    assert.equal(new URL(image).origin, expectedOrigin);
    images.add(new URL(image).pathname);
  }
  assert(!html.includes('hoodmood.vercel.app'), `${path} legacy domain`);
  if (path === '/') {
    const jsonLd = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)?.[1];
    assert(jsonLd, 'JSON-LD must be present in the server-rendered HTML');
    assert.equal(JSON.parse(jsonLd).url, expectedOrigin);
  }
  assert(!metas(html, 'robots').some((v) => v.includes('noindex')), `${path} noindex`);
  if (['/oferta/szczecinek', '/grafik/szczecinek', '/cennik/szczecinek', '/kadra/julia-kaczmarzyk'].includes(path)) {
    const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
    const nodes = scripts.flatMap(([, json]) => JSON.parse(json)['@graph'] || []);
    const page = nodes.find((node) => node['@id'] === `${url}#webpage`);
    assert.equal(page?.url, url, `${path} structured page URL`);
    const breadcrumbs = nodes.find((node) => node['@type'] === 'BreadcrumbList');
    assert.equal(breadcrumbs?.itemListElement.at(-1).item, url, `${path} breadcrumb destination`);
    assert.equal(metas(html, 'og:image')[0], `${expectedOrigin}/assets/optimized/localizations/szczecinek-dworcowa.webp`);
    if (path === '/kadra/julia-kaczmarzyk') {
      assert.equal(page['@type'], 'ProfilePage');
      assert.equal(page.mainEntity['@type'], 'Person');
      assert.equal(page.mainEntity.name, 'Julia Kaczmarzyk');
      assert(!page.mainEntity.image, 'Do not present a placeholder as Julia’s portrait');
    }
  }
  results.push({ path, canonical: url, title, description });
}
assert.equal(new Set(results.map((r) => r.title)).size, results.length, 'Duplicate titles');
assert.equal(new Set(results.map((r) => r.description)).size, results.length, 'Duplicate descriptions');
for (const path of images) {
  const response = await get(path);
  assert.equal(response.status, 200, `Missing social image ${path}`);
  assert(response.headers.get('content-type')?.startsWith('image/'));
  await response.arrayBuffer();
}
const robots = await get('/robots.txt');
assert.equal(robots.status, 200);
const robotsText = await robots.text();
assert(robotsText.includes(`Sitemap: ${expectedOrigin}/sitemap.xml`));
assert(robotsText.includes(`Host: ${expectedOrigin}`));
for (const path of ['/oferta/nie-istnieje', '/grafik/nie-istnieje', '/kadra/nie-istnieje', '/cennik/koszalin/nie-istnieje', '/cennik/koszalin/constructor', '/cennik/koszalin/__proto__', '/cennik/koszalin/toString']) {
  const response = await get(path);
  const html = await response.text();
  assert(response.status === 404 || (response.status === 200 && metas(html, 'robots').some((v) => v.includes('noindex'))), `${path} invalid route indexed`);
  assert.equal(canonicals(html).length, 0, `${path} must not advertise a canonical`);
}
console.log(JSON.stringify({ checkedPages: results.length, socialImages: [...images], results }, null, 2));

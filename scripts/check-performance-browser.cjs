// Requires a local production server on port 3100 and Chrome; artifacts go to /tmp/hoodmood-stage2.
const {spawn}=require('node:child_process');
const fs=require('node:fs');
fs.mkdirSync('/tmp/hoodmood-stage2/downloads',{recursive:true});
const chrome=spawn(process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',['--headless','--no-first-run','--no-default-browser-check','--remote-debugging-port=19229','--user-data-dir=/tmp/hoodmood-stage2/browser-profile','about:blank'],{stdio:'ignore'});
const delay=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
let tab;
for(let i=0;i<50;i++){try {tab=await (await fetch('http://127.0.0.1:19229/json/new?about:blank',{method:'PUT'})).json();break;}catch{await delay(200);}}
const ws=new WebSocket(tab.webSocketDebuggerUrl);await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0;const pending=new Map();ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){pending.get(m.id)?.(m);pending.delete(m.id);}});
const call=(method,params={})=>new Promise(r=>{pending.set(++id,r);ws.send(JSON.stringify({id,method,params}));});
await call('Page.enable');
await call('Page.addScriptToEvaluateOnNewDocument',{source:"sessionStorage.setItem('hoodmood-season-launch-dismissed','true')"});
await call('Emulation.setDeviceMetricsOverride',{width:Number(process.env.AUDIT_WIDTH || 1440),height:1000,deviceScaleFactor:1,mobile:Number(process.env.AUDIT_WIDTH || 1440)<768});




const ev=async expression=>(await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result?.result?.value;

const assert=require('node:assert/strict');
const results=[];
const waitFor=async(expr,timeout=20000)=>{const start=Date.now();while(Date.now()-start<timeout){if(await ev(expr))return;await delay(100);}throw Error('Timeout: '+expr)};
await call('Browser.setDownloadBehavior',{behavior:'allow',downloadPath:'/tmp/hoodmood-stage2/downloads'});
await call('Page.addScriptToEvaluateOnNewDocument',{source:`window.pdfCaptures=[]; const original=HTMLCanvasElement.prototype.toDataURL; HTMLCanvasElement.prototype.toDataURL=function(...args){const data=original.apply(this,args);if(this.width>1500&&this.height>300)window.pdfCaptures.push({width:this.width,height:this.height,data});return data;};`});
for(const city of ['koszalin','polanow','bialy-bor']){
 await call('Page.navigate',{url:'http://localhost:3100/grafik/'+city});await delay(1700);
 assert.equal(await ev('document.querySelectorAll("h1").length'),1);
 assert.equal(await ev('!!document.getElementById("pdf-root")'),false);
 const before=await ev('performance.getEntriesByType("resource").map(r=>r.name).filter(n=>n.endsWith(".js"))');
 await ev(`window.exportButton=[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Pobierz grafik'));exportButton.click();exportButton.click();`);
 assert.equal(await ev('exportButton.disabled'),true);
 await waitFor('!!document.getElementById("pdf-root")');
 assert.equal(await ev('document.getElementById("pdf-root").parentElement.getAttribute("aria-hidden")'), 'true');
 await waitFor('!exportButton.disabled',30000);
 assert.equal(await ev('!!document.getElementById("pdf-root")'),false);
 assert.equal(await ev('document.body.innerText.includes("Nie udało się wygenerować")'),false);
 const captures=await ev('pdfCaptures');
 if(captures[0])fs.writeFileSync(`/tmp/hoodmood-stage2/pdf-${city}.png`,Buffer.from(captures[0].data.split(',')[1],'base64'));
 const after=await ev('performance.getEntriesByType("resource").map(r=>r.name).filter(n=>n.endsWith(".js"))');
 results.push({city,pdf:'success',beforeScripts:before,exportScripts:after.filter(x=>!before.includes(x)),canvas:captures.map(({width,height})=>({width,height}))});
 // Force canvas failure: cleanup and retry feedback.
 await ev('HTMLCanvasElement.prototype.toDataURL=function(){throw new Error("test export failure")};exportButton.click()');
 await waitFor('!exportButton.disabled');
 assert.equal(await ev('document.body.innerText.includes("Nie udało się wygenerować")'),true);
 assert.equal(await ev('!!document.getElementById("pdf-root")'),false);
}
await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
await call('Page.navigate',{url:'http://localhost:3100/'});await delay(3000);
assert.equal(await ev('!!document.querySelector("[data-hero-video-state] video")'),false);
assert.equal(await ev('performance.getEntriesByType("resource").some(r=>r.name.includes("hero-desktop-wide.mp4"))'),false);
results.push({reducedMotion:'static without video request'});
await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'no-preference'}]});
await waitFor('document.querySelector("[data-hero-video-state]")?.dataset.heroVideoState==="playing"');
await ev('window.scrollTo(0,innerHeight*2)');await delay(1000);
assert.equal(await ev('document.querySelector("[data-hero-video-state] video").paused'),true);
await ev('window.scrollTo(0,0)');await delay(1400);
assert.equal(await ev('document.querySelector("[data-hero-video-state] video").paused'),false);
await ev('Object.defineProperty(document,"visibilityState",{configurable:true,value:"hidden"});document.dispatchEvent(new Event("visibilitychange"))');await delay(100);
assert.equal(await ev('document.querySelector("[data-hero-video-state] video").paused'),true);
await ev('Object.defineProperty(document,"visibilityState",{configurable:true,value:"visible"});document.dispatchEvent(new Event("visibilitychange"))');await delay(500);
assert.equal(await ev('document.querySelector("[data-hero-video-state] video").paused'),false);
results.push({video:'plays, pauses offscreen, resumes; simulated visibilitychange passes'});
const injected=await call('Page.addScriptToEvaluateOnNewDocument',{source:'HTMLMediaElement.prototype.play=function(){return Promise.reject(new DOMException("Blocked","NotAllowedError"))}'});
await call('Page.reload');await delay(3000);
assert.equal(await ev('document.querySelector("[data-hero-video-state]").dataset.heroVideoState'),'failed');
assert.equal(await ev('getComputedStyle(document.querySelector("[data-hero-video-state] img")).opacity'),'1');
results.push({autoplayFailure:'poster visible'});
await call('Page.removeScriptToEvaluateOnNewDocument',{identifier:injected.result.identifier});
const saveData=await call('Page.addScriptToEvaluateOnNewDocument',{source:'Object.defineProperty(navigator,"connection",{value:Object.assign(new EventTarget(),{saveData:true}),configurable:true})'});
await call('Page.reload');await delay(3000);
assert.equal(await ev('!!document.querySelector("[data-hero-video-state] video")'),false);
results.push({saveData:'static without video'});
fs.writeFileSync('/tmp/hoodmood-stage2/browser-results.json',JSON.stringify(results,null,2));
console.log('PASS: all city PDF exports, cleanup/error, hero motion/autoplay/offscreen/visibility/save-data');
ws.close();
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>chrome.kill());

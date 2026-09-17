const fs=require('fs'),ts=require(process.cwd()+'/node_modules/typescript'),vm=require('vm'),assert=require('node:assert/strict');
const code=ts.transpileModule(fs.readFileSync('myComponents/pages/news/instagram/instagramApi.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
function setup(fetch,env={INSTAGRAM_USER_ID:'fixture',INSTAGRAM_ACCESS_TOKEN:'test'}){const exports={},log={timeouts:[],cache:[],fetch:[]};vm.runInNewContext(code,{exports,require:(n)=>n==='next/cache'?{unstable_cache:(fn,keys,opts)=>{log.cache.push(opts);return fn}}:{},URL,Intl,Date,process:{env},console:{error:()=>{}},AbortSignal:{timeout:(ms)=>{log.timeouts.push(ms);return AbortSignal.timeout(ms)}},fetch:async(...a)=>{log.fetch.push(a);return fetch(...a)}});return{...exports,log};}
(async()=>{
let a=setup(async()=>Response.json({data:[]}));assert.equal((await a.getInstagramPostsPage()).status,'success');assert.equal(a.log.timeouts[0],6000);assert.equal(a.log.cache[0].revalidate,600);assert.equal(a.log.fetch[0][1].cache,'no-store');
a=setup(async()=>{throw new Error('network')});assert.equal((await a.getInstagramPostsPage()).status,'error');
a=setup(async()=>Response.json({error:'bad token'},{status:400}));assert.equal((await a.getInstagramPostsPage()).status,'error');assert.equal(a.log.fetch.length,2);assert.equal(a.log.fetch[0][1].signal,a.log.fetch[1][1].signal);
a=setup(async()=>Response.json({wrong:[]}));assert.equal((await a.getInstagramPostsPage()).status,'error');
a=setup(async()=>Response.json({data:[{id:'1',media_type:'IMAGE',media_url:'https://example.com/1.jpg',timestamp:'2026-09-16T10:00:00Z'}],paging:{next:'next',cursors:{after:'cursor'}}}));let r=await a.getInstagramPostsPage();assert.equal(r.posts.length,1);assert.equal(r.nextCursor,'cursor');
a=setup(()=>{throw Error('should not fetch')},{});assert.equal((await a.getInstagramPostsPage()).status,'error');assert.equal(a.log.fetch.length,0);
console.log('PASS: success-empty, mapped feed, network failure, invalid payload, missing configuration, fallback shared timeout, revalidation 600s');
})();

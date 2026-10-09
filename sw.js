/* FINANCE OS 2.0.0 | fa391131dcf9 */
const PREFIX='finance-os:'+self.registration.scope+':';
const CACHE=PREFIX+'fa391131dcf9';
const HOME=new URL('./index.html',self.registration.scope).href;
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('message',e=>{if(e.data?.type==='ACTIVATE')self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith(PREFIX)&&k!==CACHE)||k==='finance-os-v1').map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(self.registration.scope)||u.pathname.endsWith('/sw.js'))return;
 const navigation=e.request.mode==='navigate',key=navigation?HOME:e.request;
 e.respondWith((async()=>{const c=await caches.open(CACHE);try{const r=await fetch(e.request);if(r.ok&&r.type==='basic'&&!u.pathname.endsWith('/update.html'))await c.put(key,r.clone());if(r.ok)return r;return (await c.match(key))||r;}catch{const r=await c.match(key);return r||new Response('Нет подключения. Откройте приложение один раз с интернетом.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}})());
});
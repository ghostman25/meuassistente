const CACHE='meuassistente-v1-3';
const BASE=self.registration.scope;
const ASSETS=['./','./app/','./assets/icon.svg','./assets/favicon.svg','./manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{
  const copy=x.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return x;
 }).catch(()=>caches.match(new URL('./',BASE).toString()))));
});

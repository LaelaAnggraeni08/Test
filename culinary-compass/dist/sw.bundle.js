if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const o=e=>n(e,d),a={module:{uri:d},exports:s,require:o};i[d]=Promise.all(c.map((e=>a[e]||o(e)))).then((e=>(r(...e),s)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"6c0c3dfd74f832e6c487.jpg",revision:null},{url:"app.bundle.js",revision:"a4a19866f2b8abbb2bb6edc9e3f34f5d"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"e9b9f4d9f98d778aa69f959a3f38f977"},{url:"favicon.png",revision:"364f62f0c6d380deeeab6b7edbc79048"},{url:"hero.jpg",revision:"2c2e0054afd34c94b4377e990e08d629"},{url:"icons/icon-128x128.png",revision:"b8e9603cd6199891e026ba635fe9be58"},{url:"icons/icon-144x144.png",revision:"1e0a4a6771cf74dbae9930f97c1586f1"},{url:"icons/icon-152x152.png",revision:"393bd34ed279e00dc3b7374cdc76af37"},{url:"icons/icon-192x192.png",revision:"c8125affdd344ba69bfc63f8720edb09"},{url:"icons/icon-384x384.png",revision:"741417eee81c4fc22a2a8a121749b937"},{url:"icons/icon-512x512.png",revision:"ed646db48ea78bbd5130c27446109b26"},{url:"icons/icon-72x72.png",revision:"7d0f47e4fffe85fb8b3fc4c0d18618ae"},{url:"icons/icon-96x96.png",revision:"4d04f0d8b2df15d408f61dcbeceac418"},{url:"index.html",revision:"ef1f1cc562541b00dcf616aa4c38c3f2"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/list")),new e.StaleWhileRevalidate({cacheName:"therestodb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"therestodb-image-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/detail")),new e.StaleWhileRevalidate({cacheName:"therestodb-detail-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map

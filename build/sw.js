if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=t(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-0e1ca5c2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"gulpfile.js",revision:"3a7caadd7edb419340c2384952b4b095"},{url:"index.html",revision:"8c39e5c32c26f3de812ca84e0841ba8d"},{url:"package-lock.json",revision:"2995524267f3146b7bb59a4474cdb2e9"},{url:"page.html",revision:"4272390ee83ccd2bfba692e9ca36e89d"},{url:"register.js",revision:"504ae1886fd347adeb957831bf0c8da7"}],{})}));
//# sourceMappingURL=sw.js.map

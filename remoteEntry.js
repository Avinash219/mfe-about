var k={2126:(i,s,u)=>{var d={"./Component":()=>u.e(638).then(()=>()=>u(9638))},b=(f,w)=>(u.R=w,w=u.o(d,f)?d[f]():Promise.resolve().then(()=>{throw new Error('Module "'+f+'" does not exist in container.')}),u.R=void 0,w),c=(f,w)=>{if(u.S){var v="default",S=u.S[v];if(S&&S!==f)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return u.S[v]=f,u.I(v,w)}};u.d(s,{get:()=>b,init:()=>c})}},L={};function e(i){var s=L[i];if(void 0!==s)return s.exports;var u=L[i]={exports:{}};return k[i](u,u.exports,e),u.exports}e.m=k,e.c=L,e.n=i=>{var s=i&&i.__esModule?()=>i.default:()=>i;return e.d(s,{a:s}),s},e.d=(i,s)=>{for(var u in s)e.o(s,u)&&!e.o(i,u)&&Object.defineProperty(i,u,{enumerable:!0,get:s[u]})},e.f={},e.e=i=>Promise.all(Object.keys(e.f).reduce((s,u)=>(e.f[u](i,s),s),[])),e.u=i=>i+"."+{8:"0c3fc4e976142041",172:"49958494381f5123",199:"dc57194404877def",203:"895d7ad5493a24c0",580:"dd3ce4e3f8606270",584:"c77f5800b8132eb5",616:"93a2368e092111e7",627:"cfb08f4c6510b038",638:"09e94941108dbb1b",639:"cd01ff85be1c88eb",693:"654f4ccd7c1f0b09",727:"0be97ebe591af9d9",791:"67888408c9d24b3a"}[i]+".js",e.miniCssF=i=>{},e.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),(()=>{var i={},s="about:";e.l=(u,d,b,c)=>{if(i[u])i[u].push(d);else{var f,w;if(void 0!==b)for(var v=document.getElementsByTagName("script"),S=0;S<v.length;S++){var p=v[S];if(p.getAttribute("src")==u||p.getAttribute("data-webpack")==s+b){f=p;break}}f||(w=!0,(f=document.createElement("script")).type="module",f.charset="utf-8",f.timeout=120,e.nc&&f.setAttribute("nonce",e.nc),f.setAttribute("data-webpack",s+b),f.src=e.tu(u)),i[u]=[d];var m=(E,V)=>{f.onerror=f.onload=null,clearTimeout(x);var j=i[u];if(delete i[u],f.parentNode&&f.parentNode.removeChild(f),j&&j.forEach(g=>g(V)),E)return E(V)},x=setTimeout(m.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=m.bind(null,f.onerror),f.onload=m.bind(null,f.onload),w&&document.head.appendChild(f)}}})(),e.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},(()=>{e.S={};var i={},s={};e.I=(u,d)=>{d||(d=[]);var b=s[u];if(b||(b=s[u]={}),!(d.indexOf(b)>=0)){if(d.push(b),i[u])return i[u];e.o(e.S,u)||(e.S[u]={});var c=e.S[u],w="about",v=(m,x,E,V)=>{var j=c[m]=c[m]||{},g=j[x];(!g||!g.loaded&&(!V!=!g.eager?V:w>g.from))&&(j[x]={get:E,from:w,eager:!!V})},p=[];return"default"===u&&(v("@angular/common/http","17.3.0",()=>e.e(199).then(()=>()=>e(4199))),v("@angular/common","17.3.0",()=>e.e(584).then(()=>()=>e(9584))),v("@angular/core/primitives/signals","17.3.0",()=>e.e(693).then(()=>()=>e(7693))),v("@angular/core","17.3.0",()=>e.e(616).then(()=>()=>e(9616))),v("@angular/platform-browser","17.3.0",()=>e.e(8).then(()=>()=>e(2008))),v("@angular/router","17.3.0",()=>e.e(791).then(()=>()=>e(1172))),v("rxjs/operators","7.8.0",()=>e.e(727).then(()=>()=>e(727))),v("rxjs","7.8.0",()=>e.e(639).then(()=>()=>e(9639)))),i[u]=p.length?Promise.all(p).then(()=>i[u]=1):1}}})(),(()=>{var i;e.tt=()=>(void 0===i&&(i={createScriptURL:s=>s},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("angular#bundler",i))),i)})(),e.tu=i=>e.tt().createScriptURL(i),(()=>{var i;if("string"==typeof import.meta.url&&(i=import.meta.url),!i)throw new Error("Automatic publicPath is not supported in this browser");i=i.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=i})(),(()=>{var i=t=>{var n=o=>o.split(".").map(l=>+l==l?+l:l),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),a=r[1]?n(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,n(r[2]))),r[3]&&(a.push([]),a.push.apply(a,n(r[3]))),a},u=t=>{var n=t[0],r="";if(1===t.length)return"*";if(n+.5){r+=0==n?">=":-1==n?"<":1==n?"^":2==n?"~":n>0?"=":"!=";for(var a=1,o=1;o<t.length;o++)a--,r+="u"==(typeof(h=t[o]))[0]?"-":(a>0?".":"")+(a=2,h);return r}var l=[];for(o=1;o<t.length;o++){var h=t[o];l.push(0===h?"not("+C()+")":1===h?"("+C()+" || "+C()+")":2===h?l.pop()+" "+l.pop():u(h))}return C();function C(){return l.pop().replace(/^\((.+)\)$/,"$1")}},d=(t,n)=>{if(0 in t){n=i(n);var r=t[0],a=r<0;a&&(r=-r-1);for(var o=0,l=1,h=!0;;l++,o++){var C,A,P=l<t.length?(typeof t[l])[0]:"";if(o>=n.length||"o"==(A=(typeof(C=n[o]))[0]))return!h||("u"==P?l>r&&!a:""==P!=a);if("u"==A){if(!h||"u"!=P)return!1}else if(h)if(P==A)if(l<=r){if(C!=t[l])return!1}else{if(a?C>t[l]:C<t[l])return!1;C!=t[l]&&(h=!1)}else if("s"!=P&&"n"!=P){if(a||l<=r)return!1;h=!1,l--}else{if(l<=r||A<P!=a)return!1;h=!1}else"s"!=P&&"n"!=P&&(h=!1,l--)}}var F=[],O=F.pop.bind(F);for(o=1;o<t.length;o++){var $=t[o];F.push(1==$?O()|O():2==$?O()&O():$?d($,n):!O())}return!!O()},f=(t,n)=>{var r=t[n];return Object.keys(r).reduce((a,o)=>!a||!r[a].loaded&&((t,n)=>{t=i(t),n=i(n);for(var r=0;;){if(r>=t.length)return r<n.length&&"u"!=(typeof n[r])[0];var a=t[r],o=(typeof a)[0];if(r>=n.length)return"u"==o;var l=n[r],h=(typeof l)[0];if(o!=h)return"o"==o&&"n"==h||"s"==h||"u"==o;if("o"!=o&&"u"!=o&&a!=l)return a<l;r++}})(a,o)?o:a,0)},S=(t,n,r,a)=>{var o=f(t,r);return d(a,o)||V(((t,n,r,a)=>"Unsatisfied version "+r+" from "+(r&&t[n][r].from)+" of shared singleton module "+n+" (required "+u(a)+")")(t,r,o,a)),g(t[r][o])},V=t=>{typeof console<"u"&&console.warn&&console.warn(t)},g=t=>(t.loaded=1,t.get()),M=(t=>function(n,r,a,o){var l=e.I(n);return l&&l.then?l.then(t.bind(t,n,e.S[n],r,a,o)):t(n,e.S[n],r,a,o)})((t,n,r,a,o)=>n&&e.o(n,r)?S(n,0,r,a):o()),T={},B={5012:()=>M("default","@angular/router",[1,17,3,0],()=>e.e(172).then(()=>()=>e(1172))),4606:()=>M("default","@angular/core",[1,17,3,0],()=>e.e(616).then(()=>()=>e(9616))),5880:()=>M("default","@angular/common",[1,17,3,0],()=>e.e(203).then(()=>()=>e(9584))),5883:()=>M("default","rxjs",[2,7,8,0],()=>e.e(639).then(()=>()=>e(9639))),6883:()=>M("default","rxjs/operators",[2,7,8,0],()=>e.e(727).then(()=>()=>e(727))),4164:()=>M("default","@angular/core/primitives/signals",[1,17,3,0],()=>e.e(693).then(()=>()=>e(7693))),6972:()=>M("default","@angular/common/http",[1,17,3,0],()=>e.e(580).then(()=>()=>e(4199))),1929:()=>M("default","@angular/platform-browser",[1,17,3,0],()=>e.e(627).then(()=>()=>e(2008)))},U={8:[4606,5880,6972],172:[5883,5880,6883,1929],199:[4606,5880,5883,6883],580:[5883,6883],584:[4606],616:[4164,5883,6883],627:[5880,6972],638:[5012,4606],791:[1929,4606,5880,5883,6883]},z={};e.f.consumes=(t,n)=>{e.o(U,t)&&U[t].forEach(r=>{if(e.o(T,r))return n.push(T[r]);if(!z[r]){var a=h=>{T[r]=0,e.m[r]=C=>{delete e.c[r],C.exports=h()}};z[r]=!0;var o=h=>{delete T[r],e.m[r]=C=>{throw delete e.c[r],h}};try{var l=B[r]();l.then?n.push(T[r]=l.then(a).catch(o)):a(l)}catch(h){o(h)}}})}})(),(()=>{var i={594:0};e.f.j=(d,b)=>{var c=e.o(i,d)?i[d]:void 0;if(0!==c)if(c)b.push(c[2]);else{var f=new Promise((p,m)=>c=i[d]=[p,m]);b.push(c[2]=f);var w=e.p+e.u(d),v=new Error;e.l(w,p=>{if(e.o(i,d)&&(0!==(c=i[d])&&(i[d]=void 0),c)){var m=p&&("load"===p.type?"missing":p.type),x=p&&p.target&&p.target.src;v.message="Loading chunk "+d+" failed.\n("+m+": "+x+")",v.name="ChunkLoadError",v.type=m,v.request=x,c[1](v)}},"chunk-"+d,d)}};var s=(d,b)=>{var v,S,[c,f,w]=b,p=0;if(c.some(x=>0!==i[x])){for(v in f)e.o(f,v)&&(e.m[v]=f[v]);w&&w(e)}for(d&&d(b);p<c.length;p++)e.o(i,S=c[p])&&i[S]&&i[S][0](),i[S]=0},u=self.webpackChunkabout=self.webpackChunkabout||[];u.forEach(s.bind(null,0)),u.push=s.bind(null,u.push.bind(u))})();var R=e(2126),D=R.get,G=R.init;export{D as get,G as init};
import{U as o,aQ as p,aR as u,aS as l,aT as c,aU as f,aV as d,aW as m,aX as h,aY as g,aZ as A,d as P,u as v,y,x as R,a_ as w,a$ as C,b0 as b,aB as S}from"./chunks/framework.D37lgs2D.js";import{R as T}from"./chunks/theme.D1Roi_s8.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),_=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),C(),b(),s.setup&&s.setup(),()=>S(s.Layout)}});async function E(){globalThis.__VITEPRESS__=!0;const e=D(),a=x();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function x(){return h(_)}function D(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&E().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{E as createApp};

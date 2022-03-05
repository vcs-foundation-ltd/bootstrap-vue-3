import{_ as c,f as o,j as u,k as d,v as e,A as s,s as a,G as h,y as t,P as i}from"./app.ef13db61.js";const _={},b=e("h1",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),t(" Introduction")],-1),m=e("p",null,"Get started with BootstrapVue3 and Bootstrap v5, the world\u2019s most popular framework for building responsive, mobile-first sites.",-1),f={class:"custom-container danger"},k=e("p",{class:"custom-container-title"},"NOT PRODUCTION READY",-1),g=t("This project is still in "),v=e("strong",null,"alpha version",-1),y=t(". There is a lot of work to do, if you want to contribute you can use it and submit an "),w={href:"https://github.com/cdmoro/bootstrap-vue-3/issues",target:"_blank",rel:"noopener noreferrer"},B=t("issue"),x=t(" or even better, a "),V={href:"https://github.com/cdmoro/bootstrap-vue-3/pulls",target:"_blank",rel:"noopener noreferrer"},T=t("pull request"),I=t(" \u{1F604}."),A=e("h2",{id:"why-bootstrapvue3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#why-bootstrapvue3","aria-hidden":"true"},"#"),t(" Why BootstrapVue3?")],-1),C=t("BootstrapVue3 is an attempt to have the "),j={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},N=t("BootstrapVue"),G=t(" components in Vue3, Bootstrap 5, and typescript. Another goal is to have components written in a simple and readable way."),L=t("As you may suppose, this library is heavily inspired by "),O={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},R=t("BootstrapVue"),q=t(", as well as the components properties, events, slots, directives, etc. We want to make it that way because we want to have compatibility with BootstrapVue, so it will be easy to switch between libraries."),E=e("h2",{id:"contribute-support-\u{1F64C}",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contribute-support-\u{1F64C}","aria-hidden":"true"},"#"),t(" Contribute & support \u{1F64C}")],-1),P=e("p",null,[t("This project is still in "),e("strong",null,"alpha version"),t(" so there is a lot of work to do. If you want to contribute you can:")],-1),S=t("submit an "),Y={href:"https://github.com/cdmoro/bootstrap-vue-3/issues/new",target:"_blank",rel:"noopener noreferrer"},M=t("issue"),W=t("or better, a "),z={href:"https://github.com/cdmoro/bootstrap-vue-3/pulls",target:"_blank",rel:"noopener noreferrer"},D=t("pull request"),F=t("or even better, visit "),U={href:"https://patreon.com/cdmoro",target:"_blank",rel:"noopener noreferrer"},H=t("my patreon page"),J=t(" and support me \u{1F604}"),K=e("h3",{id:"one-time-donations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#one-time-donations","aria-hidden":"true"},"#"),t(" One-time donations")],-1),Q=e("p",null,"Or if you prefer you can make a one-time donation through these channels:",-1),X={href:"https://www.buymeacoffee.com/cdmoro",target:"_blank",rel:"noopener noreferrer"},Z=e("img",{src:"https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png",alt:'"Buy Me A Coffee"'},null,-1),$={href:"https://cafecito.app/cdmoro",target:"_blank",rel:"noopener noreferrer"},ee=e("img",{src:"https://cdn.cafecito.app/imgs/buttons/button_2.svg",alt:"Invitame un caf\xE9 en cafecito.app"},null,-1),te=e("h2",{id:"requisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requisites","aria-hidden":"true"},"#"),t(" Requisites")],-1),se=e("p",null,"In order to use this library you have to install these packages:",-1),ne={href:"https://v3.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},oe=t("Vue.js"),ae=t(),re=e("code",null,"^3.0.x",-1),ie={href:"https://getbootstrap.com/docs/5.1/getting-started/introduction/",target:"_blank",rel:"noopener noreferrer"},le=t("Bootstrap"),pe=t(),ce=e("code",null,"^5.0.x",-1),ue=e("h2",{id:"install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#"),t(" Install")],-1),de=e("h3",{id:"bundlers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bundlers","aria-hidden":"true"},"#"),t(" Bundlers")],-1),he=e("p",null,"To install this library you can use Yarn or NPM:",-1),_e=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),t(),e("span",{class:"token function"},"add"),t(` bootstrap bootstrap-vue-3
`)])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),be=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),t(),e("span",{class:"token function"},"install"),t(` bootstrap bootstrap-vue-3
`)])]),e("div",{class:"line-numbers"},[e("span",{class:"line-number"},"1"),e("br")])],-1),me=i(`<p>And in your <code>main.js/ts</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> BootstrapVue3 <span class="token keyword">from</span> <span class="token string">&#39;bootstrap-vue-3&#39;</span>

<span class="token comment">// Optional, since every component import their Bootstrap functionality</span>
<span class="token comment">// the following line is not necessary</span>
<span class="token comment">// import &#39;bootstrap&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;bootstrap/dist/css/bootstrap.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;bootstrap-vue-3/dist/bootstrap-vue-3.css&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>BootstrapVue3<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="comparison-with-boostrapvue" tabindex="-1"><a class="header-anchor" href="#comparison-with-boostrapvue" aria-hidden="true">#</a> Comparison with BoostrapVue</h2>`,3),fe=t("As we said, we based this project in "),ke={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},ge=t("BootstrapVue"),ve=t(". We consider BootstrapVue as the best implementation of Bootstrap "),ye=e("code",null,"v4",-1),we=t(", so a good approach is to replicate every BootstrapVue component, as well their props, events, etc. and add the new features of Bootstrap "),Be=e("code",null,"v5",-1),xe=t("."),Ve=t("You can view the full list in the following "),Te=t("section"),Ie=t("."),Ae=i('<h2 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h2><p><code>BootstrapVue3</code> born with Typescript in mind. This is a list of types we use in this library and that you can use too:</p><ul><li>Alignment</li><li>BreadcrumbItem</li><li>Breakpoint</li><li>ButtonVariant</li><li>ColorVariant</li><li>InputSize</li><li>InputType</li><li>LinkTarget</li><li>Size</li><li>SpinnerType</li><li>TableField</li><li>TableItem</li><li>VerticalAlign</li></ul>',3);function Ce(je,Ne){const n=o("ExternalLinkIcon"),r=o("CodeGroupItem"),l=o("CodeGroup"),p=o("RouterLink");return u(),d(h,null,[b,m,e("div",f,[k,e("p",null,[g,v,y,e("a",w,[B,s(n)]),x,e("a",V,[T,s(n)]),I])]),A,e("p",null,[C,e("a",j,[N,s(n)]),G]),e("p",null,[L,e("a",O,[R,s(n)]),q]),E,P,e("ul",null,[e("li",null,[S,e("a",Y,[M,s(n)])]),e("li",null,[W,e("a",z,[D,s(n)])]),e("li",null,[F,e("a",U,[H,s(n)]),J])]),K,Q,e("p",null,[e("a",X,[Z,s(n)]),e("a",$,[ee,s(n)])]),te,se,e("ul",null,[e("li",null,[e("a",ne,[oe,s(n)]),ae,re]),e("li",null,[e("a",ie,[le,s(n)]),pe,ce])]),ue,de,he,s(l,null,{default:a(()=>[s(r,{title:"YARN",active:""},{default:a(()=>[_e]),_:1}),s(r,{title:"NPM"},{default:a(()=>[be]),_:1})]),_:1}),me,e("p",null,[fe,e("a",ke,[ge,s(n)]),ve,ye,we,Be,xe]),e("p",null,[Ve,s(p,{to:"/reference/parityList.html"},{default:a(()=>[Te]),_:1}),Ie]),Ae],64)}var Le=c(_,[["render",Ce]]);export{Le as default};

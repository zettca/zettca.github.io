var Et=Object.defineProperty;var kt=(t,e)=>{for(var n in e)Et(t,n,{get:e[n],enumerable:!0})};var fe={};kt(fe,{MODE:()=>xt,NODE_ENV:()=>$t,SSR:()=>jt});var xt="development",$t="development",jt=!1;function De(){}function de(t,e){for(let n in e)t[n]=e[n];return t}function g(t,e,n,o,i){t.__svelte_meta={loc:{file:e,line:n,column:o,char:i}}}function Re(t){return t()}function Le(){return Object.create(null)}function U(t){t.forEach(Re)}function Ct(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}var Z;function Ne(t,e){return Z||(Z=document.createElement("a")),Z.href=e,t===Z.href}function Ot(t){return Object.keys(t).length===0}function Be(t,e,n,o){if(t){let i=qe(t,e,n,o);return t[0](i)}}function qe(t,e,n,o){return t[1]&&o?de(n.ctx.slice(),t[1](o(e))):n.ctx}function ze(t,e,n,o){if(t[2]&&o){let i=t[2](o(n));if(e.dirty===void 0)return i;if(typeof i=="object"){let c=[],r=Math.max(e.dirty.length,i.length);for(let s=0;s<r;s+=1)c[s]=e.dirty[s]|i[s];return c}return e.dirty|i}return e.dirty}function He(t,e,n,o,i,c){if(i){let r=qe(e,n,o,c);t.p(r,i)}}function Ve(t){if(t.ctx.length>32){let e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function Pt(t,e){t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function Fe(t){t.parentNode.removeChild(t)}function Ge(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function me(t){return document.createTextNode(t)}function I(){return me(" ")}function At(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function It(t){return Array.from(t.childNodes)}function X(t,e,n){t.classList[n?"add":"remove"](e)}function Mt(t,e,n=!1){let o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}var Je;function ee(t){Je=t}var K=[],Ue=[],te=[],Xe=[],Dt=Promise.resolve(),pe=!1;function Rt(){pe||(pe=!0,Dt.then(Ke))}function he(t){te.push(t)}var _e=!1,ge=new Set;function Ke(){if(!_e){_e=!0;do{for(let t=0;t<K.length;t+=1){let e=K[t];ee(e),Lt(e.$$)}for(ee(null),K.length=0;Ue.length;)Ue.pop()();for(let t=0;t<te.length;t+=1){let e=te[t];ge.has(e)||(ge.add(e),e())}te.length=0}while(K.length);for(;Xe.length;)Xe.pop()();pe=!1,_e=!1,ge.clear()}}function Lt(t){if(t.fragment!==null){t.update(),U(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(he)}}var ne=new Set,F;function We(){F={r:0,c:[],p:F}}function Ye(){F.r||U(F.c),F=F.p}function C(t,e){t&&t.i&&(ne.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(ne.has(t))return;ne.add(t),F.c.push(()=>{ne.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function Qe(t,e){let n={},o={},i={$$scope:1},c=t.length;for(;c--;){let r=t[c],s=e[c];if(s){for(let u in r)u in s||(o[u]=1);for(let u in s)i[u]||(n[u]=s[u],i[u]=1);t[c]=s}else for(let u in r)i[u]=1}for(let r in o)r in n||(n[r]=void 0);return n}function Ze(t){return typeof t=="object"&&t!==null?t:{}}function G(t){t&&t.c()}function q(t,e,n,o){let{fragment:i,on_mount:c,on_destroy:r,after_update:s}=t.$$;i&&i.m(e,n),o||he(()=>{let u=c.map(Re).filter(Ct);r?r.push(...u):U(u),t.$$.on_mount=[]}),s.forEach(he)}function B(t,e){let n=t.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(K.push(t),Rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(t,e,n,o,i,c,r,s=[-1]){let u=Je;ee(t);let l=t.$$={fragment:null,ctx:null,props:c,update:De,not_equal:i,bound:Le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:e.context||[]),callbacks:Le(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,E,...p)=>{let d=p.length?p[0]:E;return l.ctx&&i(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),f&&Nt(t,a)),E}):[],l.update(),f=!0,U(l.before_update),l.fragment=o?o(l.ctx):!1,e.target){if(e.hydrate){let a=It(e.target);l.fragment&&l.fragment.l(a),a.forEach(Fe)}else l.fragment&&l.fragment.c();e.intro&&C(t.$$.fragment),q(t,e.target,e.anchor,e.customElement),Ke()}ee(u)}var et=class{$destroy(){B(this,1),this.$destroy=De}$on(e,n){let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){this.$$set&&!Ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function b(t,e){document.dispatchEvent(Mt(t,Object.assign({version:"3.42.5"},e),!0))}function h(t,e){b("SvelteDOMInsert",{target:t,node:e}),Pt(t,e)}function M(t,e,n){b("SvelteDOMInsert",{target:t,node:e,anchor:n}),Tt(t,e,n)}function D(t){b("SvelteDOMRemove",{node:t}),Fe(t)}function m(t,e,n){At(t,e,n),n==null?b("SvelteDOMRemoveAttribute",{node:t,attribute:e}):b("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function tt(t,e){e=""+e,t.wholeText!==e&&(b("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function ve(t){if(typeof t!="string"&&!(t&&typeof t=="object"&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function H(t,e,n){for(let o of Object.keys(e))~n.indexOf(o)||console.warn(`<${t}> received an unexpected slot "${o}".`)}var L=class extends et{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}};var oe="src/components/Section.svelte";function we(t){let e,n,o,i,c={c:function(){e=v("div"),n=v("a"),o=me(t[0]),m(n,"href",i="#"+t[4]),g(n,oe,12,6,245),m(e,"class","title"),g(e,oe,11,4,219)},m:function(s,u){M(s,e,u),h(e,n),h(n,o)},p:function(s,u){u&1&&tt(o,s[0])},d:function(s){s&&D(e)}};return b("SvelteRegisterBlock",{block:c,id:we.name,type:"if",source:"(11:2) {#if showTitle}",ctx:t}),c}function ye(t){let e,n,o,i,c=t[3]&&we(t),r=t[6].default,s=Be(r,t,t[5],null),u={c:function(){e=v("section"),c&&c.c(),n=I(),o=v("div"),s&&s.c(),m(o,"class","center svelte-1svbsz8"),g(o,oe,16,2,294),m(e,"id",t[4]),m(e,"name",t[0]),m(e,"class","svelte-1svbsz8"),X(e,"full",t[1]),X(e,"center",t[2]),g(e,oe,9,0,151)},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,a){M(f,e,a),c&&c.m(e,null),h(e,n),h(e,o),s&&s.m(o,null),i=!0},p:function(f,[a]){f[3]?c?c.p(f,a):(c=we(f),c.c(),c.m(e,n)):c&&(c.d(1),c=null),s&&s.p&&(!i||a&32)&&He(s,r,f,f[5],i?ze(r,f[5],a,null):Ve(f[5]),null),(!i||a&1)&&m(e,"name",f[0]),a&2&&X(e,"full",f[1]),a&4&&X(e,"center",f[2])},i:function(f){i||(C(s,f),i=!0)},o:function(f){A(s,f),i=!1},d:function(f){f&&D(e),c&&c.d(),s&&s.d(f)}};return b("SvelteRegisterBlock",{block:u,id:ye.name,type:"component",source:"",ctx:t}),u}function qt(t,e,n){let{$$slots:o={},$$scope:i}=e;H("Section",o,["default"]);let{name:c}=e,{full:r=!1}=e,{center:s=!1}=e,{showTitle:u=!1}=e,l=c.toLowerCase(),f=["name","full","center","showTitle"];return Object.keys(e).forEach(a=>{!~f.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Section> was created with unknown prop '${a}'`)}),t.$$set=a=>{"name"in a&&n(0,c=a.name),"full"in a&&n(1,r=a.full),"center"in a&&n(2,s=a.center),"showTitle"in a&&n(3,u=a.showTitle),"$$scope"in a&&n(5,i=a.$$scope)},t.$capture_state=()=>({name:c,full:r,center:s,showTitle:u,id:l}),t.$inject_state=a=>{"name"in a&&n(0,c=a.name),"full"in a&&n(1,r=a.full),"center"in a&&n(2,s=a.center),"showTitle"in a&&n(3,u=a.showTitle)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,r,s,u,l,i,o]}var nt=class extends L{constructor(e){super(e);z(this,e,qt,ye,N,{name:0,full:1,center:2,showTitle:3}),b("SvelteRegisterComponent",{component:this,tagName:"Section",options:e,id:ye.name});let{ctx:n}=this.$$,o=e.props||{};n[0]===void 0&&!("name"in o)&&console.warn("<Section> was created without expected prop 'name'")}get name(){throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get full(){throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set full(e){throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get center(){throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set center(e){throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get showTitle(){throw new Error("<Section>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set showTitle(e){throw new Error("<Section>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}},be=nt;function re(){}function Se(t,e){for(let n in e)t[n]=e[n];return t}function ot(t){return t()}function rt(){return Object.create(null)}function se(t){t.forEach(ot)}function Bt(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function st(t){let e={};for(let n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ct(t){t.parentNode.removeChild(t)}function Ht(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t,e){for(let n in e)Ht(t,n,e[n])}var ce;function ie(t){ce=t}function lt(){if(!ce)throw new Error("Function called outside component initialization");return ce}function Vt(){let t=lt();return(e,n)=>{let o=t.$$.callbacks[e];if(o){let i=function(c,r){let s=document.createEvent("CustomEvent");return s.initCustomEvent(c,!1,!1,r),s}(e,n);o.slice().forEach(c=>{c.call(t,i)})}}}var W=[],at=[],le=[],ut=[],ft=Promise.resolve(),Ee=!1;function mt(){Ee||(Ee=!0,ft.then(dt))}function ae(t){le.push(t)}var ke=!1,xe=new Set;function dt(){if(!ke){ke=!0;do{for(let t=0;t<W.length;t+=1){let e=W[t];ie(e),Ft(e.$$)}for(ie(null),W.length=0;at.length;)at.pop()();for(let t=0;t<le.length;t+=1){let e=le[t];xe.has(e)||(xe.add(e),e())}le.length=0}while(W.length);for(;ut.length;)ut.pop()();Ee=!1,ke=!1,xe.clear()}}function Ft(t){if(t.fragment!==null){t.update(),se(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ae)}}var Gt=new Set;function Jt(t,e,n,o,i,c,r=[-1]){let s=ce;ie(t);let u=e.props||{},l=t.$$={fragment:null,ctx:null,props:c,update:re,not_equal:i,bound:rt(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:rt(),dirty:r,skip_bound:!1},f=!1;if(l.ctx=n?n(t,u,(d,_,...w)=>{let j=w.length?w[0]:_;return l.ctx&&i(l.ctx[d],l.ctx[d]=j)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](j),f&&function(O,T){O.$$.dirty[0]===-1&&(W.push(O),mt(),O.$$.dirty.fill(0)),O.$$.dirty[T/31|0]|=1<<T%31}(t,d)),_}):[],l.update(),f=!0,se(l.before_update),l.fragment=!!o&&o(l.ctx),e.target){if(e.hydrate){let d=(p=e.target,Array.from(p.childNodes));l.fragment&&l.fragment.l(d),d.forEach(ct)}else l.fragment&&l.fragment.c();e.intro&&(a=t.$$.fragment)&&a.i&&(Gt.delete(a),a.i(E)),function(d,_,w){let{fragment:j,on_mount:O,on_destroy:T,after_update:Y}=d.$$;j&&j.m(_,w),ae(()=>{let V=O.map(ot).filter(Bt);T?T.push(...V):se(V),d.$$.on_mount=[]}),Y.forEach(ae)}(t,e.target,e.anchor),dt()}var a,E,p;ie(s)}function Ut(t){let e,n,o,i=[{xmlmns:"http://www.w3.org/2000/svg"},t[0],pt(t[2],["src","transformSrc"]),{contenteditable:"true"}],c={};for(let r=0;r<i.length;r+=1)c=Se(c,i[r]);return{c(){var r;r="svg",e=document.createElementNS("http://www.w3.org/2000/svg",r),it(e,c),t[1]===void 0&&ae(()=>t[5].call(e))},m(r,s){var u,l,f,a;(function(E,p,d){E.insertBefore(p,d||null)})(r,e,s),t[1]!==void 0&&(e.innerHTML=t[1]),n||(u=e,l="input",f=t[5],u.addEventListener(l,f,a),o=()=>u.removeEventListener(l,f,a),n=!0)},p(r,[s]){it(e,c=function(u,l){let f={},a={},E={$$scope:1},p=u.length;for(;p--;){let d=u[p],_=l[p];if(_){for(let w in d)w in _||(a[w]=1);for(let w in _)E[w]||(f[w]=_[w],E[w]=1);u[p]=_}else for(let w in d)E[w]=1}for(let d in a)d in f||(f[d]=void 0);return f}(i,[{xmlmns:"http://www.w3.org/2000/svg"},1&s&&r[0],4&s&&pt(r[2],["src","transformSrc"]),{contenteditable:"true"}])),2&s&&r[1]!==e.innerHTML&&(e.innerHTML=r[1])},i:re,o:re,d(r){r&&ct(e),n=!1,o()}}}function pt(t,e){return Object.keys(t).filter(n=>e.includes(n)).forEach(n=>delete t[n]),t}function Xt(t,e,n){let o=Vt(),{src:i}=e,{transformSrc:c=a=>a}=e;var r;r=()=>{(function(a){var E;u[a]||(l&&(l=!1,o("unloaded")),u[a]=(E=a,new Promise((p,d)=>{let _=new XMLHttpRequest;_.open("GET",E,!0),_.onload=()=>{if(_.status>=200&&_.status<400)try{let j=new DOMParser().parseFromString(_.responseText,"text/xml").querySelector("svg");j?(j=c(j),p(j)):d(new Error('Loaded file is not valid SVG"'))}catch(w){d(w)}else d(new Error("Error loading SVG"))},_.onerror=d,_.send()}))),u[a].then(async p=>{let d=p.attributes;for(let _=d.length-1;_>=0;_--)n(0,f[d[_].name]=d[_].value,f);n(1,s=p.innerHTML),await(mt(),ft),l=!0,o("loaded")}).catch(p=>{delete u[a],console.error(p)})})(i)},lt().$$.on_mount.push(r);let s,u={},l=!1,f={};return t.$$set=a=>{n(2,e=Se(Se({},e),st(a))),"src"in a&&n(3,i=a.src),"transformSrc"in a&&n(4,c=a.transformSrc)},e=st(e),[f,s,e,i,c,function(){s=this.innerHTML,n(1,s)}]}var ue=class extends class{$destroy(){(function(e,n){let o=e.$$;o.fragment!==null&&(se(o.on_destroy),o.fragment&&o.fragment.d(n),o.on_destroy=o.fragment=null,o.ctx=[])})(this,1),this.$destroy=re}$on(e,n){let o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{let i=o.indexOf(n);i!==-1&&o.splice(i,1)}}$set(e){var n;this.$$set&&(n=e,Object.keys(n).length!==0)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),Jt(this,e,Xt,Ut,zt,{src:3,transformSrc:4})}};var Kt="src/components/SocialIcon.svelte";function $e(t){let e,n,o;n=new ue({props:{style:"fill: "+t[2],src:"/img/svg/"+t[0]+".svg"},$$inline:!0});let i={c:function(){e=v("a"),G(n.$$.fragment),m(e,"href",t[1]),m(e,"class","icon svelte-ewczhu"),g(e,Kt,8,0,108)},l:function(r){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(r,s){M(r,e,s),q(n,e,null),o=!0},p:function(r,[s]){let u={};s&4&&(u.style="fill: "+r[2]),s&1&&(u.src="/img/svg/"+r[0]+".svg"),n.$set(u),(!o||s&2)&&m(e,"href",r[1])},i:function(r){o||(C(n.$$.fragment,r),o=!0)},o:function(r){A(n.$$.fragment,r),o=!1},d:function(r){r&&D(e),B(n)}};return b("SvelteRegisterBlock",{block:i,id:$e.name,type:"component",source:"",ctx:t}),i}function Wt(t,e,n){let{$$slots:o={},$$scope:i}=e;H("SocialIcon",o,[]);let{name:c}=e,{url:r}=e,{fill:s}=e,u=["name","url","fill"];return Object.keys(e).forEach(l=>{!~u.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<SocialIcon> was created with unknown prop '${l}'`)}),t.$$set=l=>{"name"in l&&n(0,c=l.name),"url"in l&&n(1,r=l.url),"fill"in l&&n(2,s=l.fill)},t.$capture_state=()=>({SVG:ue,name:c,url:r,fill:s}),t.$inject_state=l=>{"name"in l&&n(0,c=l.name),"url"in l&&n(1,r=l.url),"fill"in l&&n(2,s=l.fill)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,r,s]}var ht=class extends L{constructor(e){super(e);z(this,e,Wt,$e,N,{name:0,url:1,fill:2}),b("SvelteRegisterComponent",{component:this,tagName:"SocialIcon",options:e,id:$e.name});let{ctx:n}=this.$$,o=e.props||{};n[0]===void 0&&!("name"in o)&&console.warn("<SocialIcon> was created without expected prop 'name'"),n[1]===void 0&&!("url"in o)&&console.warn("<SocialIcon> was created without expected prop 'url'"),n[2]===void 0&&!("fill"in o)&&console.warn("<SocialIcon> was created without expected prop 'fill'")}get name(){throw new Error("<SocialIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(e){throw new Error("<SocialIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get url(){throw new Error("<SocialIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set url(e){throw new Error("<SocialIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get fill(){throw new Error("<SocialIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set fill(e){throw new Error("<SocialIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}},je=ht;var k="src/components/SelfCard.svelte";function _t(t,e,n){let o=t.slice();return o[1]=e[n],o}function Ce(t){let e,n,o=[t[1]],i={};for(let r=0;r<o.length;r+=1)i=de(i,o[r]);e=new je({props:i,$$inline:!0});let c={c:function(){G(e.$$.fragment)},m:function(s,u){q(e,s,u),n=!0},p:function(s,u){let l=u&1?Qe(o,[Ze(s[1])]):{};e.$set(l)},i:function(s){n||(C(e.$$.fragment,s),n=!0)},o:function(s){A(e.$$.fragment,s),n=!1},d:function(s){B(e,s)}};return b("SvelteRegisterBlock",{block:c,id:Ce.name,type:"each",source:"(36:8) {#each icons as icon}",ctx:t}),c}function Oe(t){let e,n,o,i,c,r,s,u,l,f,a,E,p,d,_,w,j,O,T,Y,V,Ae,J,Q,R=t[0];ve(R);let y=[];for(let x=0;x<R.length;x+=1)y[x]=Ce(_t(t,R,x));let St=x=>A(y[x],1,1,()=>{y[x]=null}),Ie={c:function(){e=v("div"),n=v("div"),o=v("div"),i=v("img"),r=I(),s=v("div"),u=v("div"),l=v("h1"),l.textContent="Bruno Henriques",f=I(),a=v("strong"),a.textContent="Software Engineer",E=I(),p=v("div"),d=v("small"),d.textContent="UI • UX • Security",_=I(),w=v("small"),w.textContent="Distributed Systems",j=I(),O=v("div"),T=v("small"),T.textContent="JavaScript • Java • Python",Y=I(),V=v("div"),Ae=I(),J=v("div");for(let $=0;$<y.length;$+=1)y[$].c();m(i,"width","128"),m(i,"height","128"),Ne(i.src,c="https://avatars2.githubusercontent.com/u/638946")||m(i,"src",c),m(i,"alt","portrait"),g(i,k,14,6,467),m(o,"class","portrait svelte-ra3idf"),g(o,k,13,4,438),m(l,"class","no-separator svelte-ra3idf"),g(l,k,23,8,666),g(a,k,24,8,720),m(u,"class","separator svelte-ra3idf"),g(u,k,22,6,634),m(d,"class","svelte-ra3idf"),g(d,k,27,8,808),m(w,"class","svelte-ra3idf"),g(w,k,28,8,850),m(p,"class","separator svelte-ra3idf"),g(p,k,26,6,776),m(T,"class","svelte-ra3idf"),g(T,k,31,8,936),m(O,"class","separator svelte-ra3idf"),g(O,k,30,6,904),m(V,"class","separator dots svelte-ra3idf"),g(V,k,33,6,997),m(J,"class","no-separator social-icons svelte-ra3idf"),g(J,k,34,6,1034),g(s,k,21,4,622),m(n,"class","svelte-ra3idf"),g(n,k,12,2,428),m(e,"id","idCard"),m(e,"class","card svelte-ra3idf"),g(e,k,11,0,395)},l:function($){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function($,P){M($,e,P),h(e,n),h(n,o),h(o,i),h(n,r),h(n,s),h(s,u),h(u,l),h(u,f),h(u,a),h(s,E),h(s,p),h(p,d),h(p,_),h(p,w),h(s,j),h(s,O),h(O,T),h(s,Y),h(s,V),h(s,Ae),h(s,J);for(let S=0;S<y.length;S+=1)y[S].m(J,null);Q=!0},p:function($,[P]){if(P&1){R=$[0],ve(R);let S;for(S=0;S<R.length;S+=1){let Me=_t($,R,S);y[S]?(y[S].p(Me,P),C(y[S],1)):(y[S]=Ce(Me),y[S].c(),C(y[S],1),y[S].m(J,null))}for(We(),S=R.length;S<y.length;S+=1)St(S);Ye()}},i:function($){if(!Q){for(let P=0;P<R.length;P+=1)C(y[P]);Q=!0}},o:function($){y=y.filter(Boolean);for(let P=0;P<y.length;P+=1)A(y[P]);Q=!1},d:function($){$&&D(e),Ge(y,$)}};return b("SvelteRegisterBlock",{block:Ie,id:Oe.name,type:"component",source:"",ctx:t}),Ie}function Yt(t,e,n){let{$$slots:o={},$$scope:i}=e;H("SelfCard",o,[]);let c=[{name:"linkedin",fill:"#0077B5",url:"https://linkedin.com/in/zettca/"},{name:"instagram",fill:"#E4405F",url:"https://instagram.com/zettca/"},{name:"github",fill:"#181717",url:"https://github.com/zettca"},{name:"twitter",fill:"#1DA1F2",url:"https://twitter.com/zettca"}],r=[];return Object.keys(e).forEach(s=>{!~r.indexOf(s)&&s.slice(0,2)!=="$$"&&s!=="slot"&&console.warn(`<SelfCard> was created with unknown prop '${s}'`)}),t.$capture_state=()=>({SocialIcon:je,icons:c}),[c]}var gt=class extends L{constructor(e){super(e);z(this,e,Yt,Oe,N,{}),b("SvelteRegisterComponent",{component:this,tagName:"SelfCard",options:e,id:Oe.name})}},Pe=gt;var vt="src/App.svelte";function wt(t){let e,n,o;n=new Pe({$$inline:!0});let i={c:function(){e=v("div"),G(n.$$.fragment),m(e,"class","flex-element svelte-5bw1cw"),g(e,vt,11,4,320)},m:function(r,s){M(r,e,s),q(n,e,null),o=!0},i:function(r){o||(C(n.$$.fragment,r),o=!0)},o:function(r){A(n.$$.fragment,r),o=!1},d:function(r){r&&D(e),B(n)}};return b("SvelteRegisterBlock",{block:i,id:wt.name,type:"slot",source:'(11:2) <Section center full name=\\"Landing\\">',ctx:t}),i}function Te(t){let e,n,o;n=new be({props:{center:!0,full:!0,name:"Landing",$$slots:{default:[wt]},$$scope:{ctx:t}},$$inline:!0});let i={c:function(){e=v("main"),G(n.$$.fragment),g(e,vt,5,0,124)},l:function(r){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(r,s){M(r,e,s),q(n,e,null),o=!0},p:function(r,[s]){let u={};s&1&&(u.$$scope={dirty:s,ctx:r}),n.$set(u)},i:function(r){o||(C(n.$$.fragment,r),o=!0)},o:function(r){A(n.$$.fragment,r),o=!1},d:function(r){r&&D(e),B(n)}};return b("SvelteRegisterBlock",{block:i,id:Te.name,type:"component",source:"",ctx:t}),i}function Qt(t,e,n){let{$$slots:o={},$$scope:i}=e;H("App",o,[]);let c=[];return Object.keys(e).forEach(r=>{!~c.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<App> was created with unknown prop '${r}'`)}),t.$capture_state=()=>({Section:be,SelfCard:Pe}),[]}var yt=class extends L{constructor(e){super(e);z(this,e,Qt,Te,N,{}),b("SvelteRegisterComponent",{component:this,tagName:"App",options:e,id:Te.name})}},bt=yt;import.meta.env=fe;var Zt=new bt({target:document.body}),en=Zt;export{en as default};
//# sourceMappingURL=//dist//index.js.map
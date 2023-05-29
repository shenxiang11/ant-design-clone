import{j as n}from"./jsx-runtime-94f6e698.js";import{R as f,r as ye}from"./index-8db94870.js";import{g as he}from"./_commonjsHelpers-042e6b4d.js";var ae={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var a={}.hasOwnProperty;function r(){for(var i=[],d=0;d<arguments.length;d++){var o=arguments[d];if(o){var m=typeof o;if(m==="string"||m==="number")i.push(o);else if(Array.isArray(o)){if(o.length){var u=r.apply(null,o);u&&i.push(u)}}else if(m==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){i.push(o.toString());continue}for(var v in o)a.call(o,v)&&o[v]&&i.push(v)}}}return i.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(ae);var Se=ae.exports;const ge=he(Se);function E({index:e,children:a,split:r}){const{latestIndex:i}=f.useContext(ue),d={};return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:d,children:a}),e<i&&r&&n.jsx("span",{style:d,children:r})]})}try{E.displayName="Item",E.__docgenInfo={description:"",displayName:"Item",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"ReactNode"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}var oe={},ce={exports:{}};(function(e){function a(r){return r&&r.__esModule?r:{default:r}}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports})(ce);var Be=ce.exports,le={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=typeof Symbol=="function"&&Symbol.for,k=s?Symbol.for("react.element"):60103,I=s?Symbol.for("react.portal"):60106,b=s?Symbol.for("react.fragment"):60107,_=s?Symbol.for("react.strict_mode"):60108,N=s?Symbol.for("react.profiler"):60114,$=s?Symbol.for("react.provider"):60109,w=s?Symbol.for("react.context"):60110,R=s?Symbol.for("react.async_mode"):60111,z=s?Symbol.for("react.concurrent_mode"):60111,C=s?Symbol.for("react.forward_ref"):60112,P=s?Symbol.for("react.suspense"):60113,je=s?Symbol.for("react.suspense_list"):60120,q=s?Symbol.for("react.memo"):60115,V=s?Symbol.for("react.lazy"):60116,be=s?Symbol.for("react.block"):60121,_e=s?Symbol.for("react.fundamental"):60117,Ne=s?Symbol.for("react.responder"):60118,$e=s?Symbol.for("react.scope"):60119;function l(e){if(typeof e=="object"&&e!==null){var a=e.$$typeof;switch(a){case k:switch(e=e.type,e){case R:case z:case b:case N:case _:case P:return e;default:switch(e=e&&e.$$typeof,e){case w:case C:case V:case q:case $:return e;default:return a}}case I:return a}}}function de(e){return l(e)===z}t.AsyncMode=R;t.ConcurrentMode=z;t.ContextConsumer=w;t.ContextProvider=$;t.Element=k;t.ForwardRef=C;t.Fragment=b;t.Lazy=V;t.Memo=q;t.Portal=I;t.Profiler=N;t.StrictMode=_;t.Suspense=P;t.isAsyncMode=function(e){return de(e)||l(e)===R};t.isConcurrentMode=de;t.isContextConsumer=function(e){return l(e)===w};t.isContextProvider=function(e){return l(e)===$};t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===k};t.isForwardRef=function(e){return l(e)===C};t.isFragment=function(e){return l(e)===b};t.isLazy=function(e){return l(e)===V};t.isMemo=function(e){return l(e)===q};t.isPortal=function(e){return l(e)===I};t.isProfiler=function(e){return l(e)===N};t.isStrictMode=function(e){return l(e)===_};t.isSuspense=function(e){return l(e)===P};t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===b||e===z||e===N||e===_||e===P||e===je||typeof e=="object"&&e!==null&&(e.$$typeof===V||e.$$typeof===q||e.$$typeof===$||e.$$typeof===w||e.$$typeof===C||e.$$typeof===_e||e.$$typeof===Ne||e.$$typeof===$e||e.$$typeof===be)};t.typeOf=l;le.exports=t;var we=le.exports,ze=Be.default;Object.defineProperty(oe,"__esModule",{value:!0});var Ce=oe.default=M,Pe=ze(ye),qe=we;function M(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return Pe.default.Children.forEach(e,function(i){i==null&&!a.keepEmpty||(Array.isArray(i)?r=r.concat(M(i)):(0,qe.isFragment)(i)&&i.props?r=r.concat(M(i.props.children,a)):r.push(i))}),r}const ue=f.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),Ve={small:8,middle:16,large:24};function Ae(e){return typeof e=="string"?Ve[e]:e||0}const c=f.forwardRef((e,a)=>{const{className:r,direction:i,size:d="small",wrap:o=!1,children:m,align:u,split:v,...pe}=e,me=ge(r,"inline-flex",{"flex-col":i==="vertical","flex-row":i==="horizontal","items-start":u==="start","items-end":u==="end","items-center":u==="center","items-baseline":u==="baseline"}),[F,O]=f.useMemo(()=>(Array.isArray(d)?d:[d,d]).map(p=>Ae(p)),[d]),x={};o&&(x.flexWrap="wrap"),x.rowGap=F,x.columnGap=O;let D=0;const ve=Ce(m,{keepEmpty:!0}).map((p,A)=>{p!=null&&(D=A);const xe=p&&p.key||`item-${A}`;return n.jsx(E,{index:A,split:v,children:p},xe)}),fe=f.useMemo(()=>({horizontalSize:F,verticalSize:O,latestIndex:D}),[]);return n.jsx("div",{ref:a,className:me,style:{...x},...pe,children:n.jsx(ue.Provider,{value:fe,children:ve})})});try{c.displayName="Space",c.__docgenInfo={description:"",displayName:"Space",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'},{value:'"center"'},{value:'"baseline"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"SpaceSize | [SpaceSize, SpaceSize]"}},split:{defaultValue:null,description:"",name:"split",required:!1,type:{name:"ReactNode"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"boolean"}}}}}catch{}const Re={title:"Layout/Space",component:c,tags:["autodocs"],argTypes:{size:{control:{type:"number",min:0,max:100,step:1}},split:{control:"text"}}},y={render:e=>n.jsxs(c,{...e,children:["Space",n.jsx("button",{children:"Button 1"}),n.jsx("button",{children:"Button 2"}),n.jsx("button",{children:"Button 3"})]})},h={args:{direction:"vertical"},render:e=>n.jsxs(c,{...e,children:[n.jsx("div",{children:"Card 1"}),n.jsx("div",{children:"Card 2"}),n.jsx("div",{children:"Card 3"})]})},S={argTypes:{align:{control:"radio"}},render:()=>n.jsxs(c,{children:[n.jsxs(c,{align:"center",children:["center",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(c,{align:"start",children:["start",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(c,{align:"end",children:["end",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(c,{align:"baseline",children:["baseline",n.jsx("div",{className:"bg-cyan-400 h-20 w-10",children:"Primary Text"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]})]})},g={args:{size:40},render:e=>n.jsxs(c,{...e,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})},B={args:{wrap:!0},render:e=>n.jsxs(c,{...e,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})},j={args:{split:n.jsx("s",{children:"|"})},render:e=>n.jsxs(c,{...e,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})};var T,L,W;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Space {...args}>
      Space
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </Space>
}`,...(W=(L=y.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    direction: "vertical"
  },
  render: args => <Space {...args}>
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
    </Space>
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  argTypes: {
    align: {
      control: "radio"
    }
  },
  render: () => <Space>
      <Space align="center">
        center
        <div className="bg-cyan-400 h-20">Primary</div>
        <div className="bg-neutral-400 h-40 inline-flex items-center">
          Block
        </div>
      </Space>
      <Space align="start">
        start
        <div className="bg-cyan-400 h-20">Primary</div>
        <div className="bg-neutral-400 h-40 inline-flex items-center">
          Block
        </div>
      </Space>
      <Space align="end">
        end
        <div className="bg-cyan-400 h-20">Primary</div>
        <div className="bg-neutral-400 h-40 inline-flex items-center">
          Block
        </div>
      </Space>
      <Space align="baseline">
        baseline
        <div className="bg-cyan-400 h-20 w-10">Primary Text</div>
        <div className="bg-neutral-400 h-40 inline-flex items-center">
          Block
        </div>
      </Space>
    </Space>
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 40
  },
  render: args => <Space {...args}>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
    </Space>
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    wrap: true
  },
  render: args => <Space {...args}>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
    </Space>
}`,...(te=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,ie,se;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    split: <s>|</s>
  },
  render: args => <Space {...args}>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
    </Space>
}`,...(se=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const Fe=["Basic","Vertical","Align","CustomSize","Wrap","Split"];export{S as Align,y as Basic,g as CustomSize,j as Split,h as Vertical,B as Wrap,Fe as __namedExportsOrder,Re as default};
//# sourceMappingURL=Space.stories-b5ad2c05.js.map

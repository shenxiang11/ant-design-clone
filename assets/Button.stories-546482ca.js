import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{i as se,r as ve,c as ie,S as d}from"./Space-d36a7c75.js";import"./_commonjsHelpers-042e6b4d.js";var le={},de={exports:{}},ue={exports:{}},ce={exports:{}},pe={exports:{}};(function(r){function o(s){"@babel/helpers - typeof";return r.exports=o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r.exports.__esModule=!0,r.exports.default=r.exports,o(s)}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports})(pe);var P=pe.exports,ye={exports:{}};(function(r){var o=P.default;function s(t,a){if(o(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var l=i.call(t,a||"default");if(o(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports})(ye);var Be=ye.exports;(function(r){var o=P.default,s=Be;function t(a){var i=s(a,"string");return o(i)==="symbol"?i:String(i)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports})(ce);var je=ce.exports;(function(r){var o=je;function s(t,a,i){return a=o(a),a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports})(ue);var Se=ue.exports;(function(r){var o=Se;function s(a,i){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);i&&(u=u.filter(function(x){return Object.getOwnPropertyDescriptor(a,x).enumerable})),l.push.apply(l,u)}return l}function t(a){for(var i=1;i<arguments.length;i++){var l=arguments[i]!=null?arguments[i]:{};i%2?s(Object(l),!0).forEach(function(u){o(a,u,l[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach(function(u){Object.defineProperty(a,u,Object.getOwnPropertyDescriptor(l,u))})}return a}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports})(de);var we=de.exports,De=se.default;Object.defineProperty(le,"__esModule",{value:!0});var Pe=le.default=ke,_e=De(we);function ke(r,o){var s=(0,_e.default)({},r);return Array.isArray(o)&&o.forEach(function(t){delete s[t]}),s}var g={},R={},fe={exports:{}};(function(r){var o=P.default;function s(a){if(typeof WeakMap!="function")return null;var i=new WeakMap,l=new WeakMap;return(s=function(x){return x?l:i})(a)}function t(a,i){if(!i&&a&&a.__esModule)return a;if(a===null||o(a)!=="object"&&typeof a!="function")return{default:a};var l=s(i);if(l&&l.has(a))return l.get(a);var u={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in a)if(c!=="default"&&Object.prototype.hasOwnProperty.call(a,c)){var p=x?Object.getOwnPropertyDescriptor(a,c):null;p&&(p.get||p.set)?Object.defineProperty(u,c,p):u[c]=a[c]}return u.default=a,l&&l.set(a,u),u}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports})(fe);var Me=fe.exports,Re=Me.default;Object.defineProperty(R,"__esModule",{value:!0});R.default=qe;var Oe=Re(m);function qe(r,o,s){var t=Oe.useRef({});return(!("value"in t.current)||s(t.current.condition,o))&&(t.current.value=r(),t.current.condition=o),t.current.value}var he=se.default;Object.defineProperty(g,"__esModule",{value:!0});var Ne=g.composeRef=xe;g.fillRef=me;g.supportRef=Ge;g.useComposeRef=Te;var Ee=he(P),Ie=ve,Le=he(R);function me(r,o){typeof r=="function"?r(o):(0,Ee.default)(r)==="object"&&r&&"current"in r&&(r.current=o)}function xe(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];var t=o.filter(function(a){return a});return t.length<=1?t[0]:function(a){o.forEach(function(i){me(i,a)})}}function Te(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(0,Le.default)(function(){return xe.apply(void 0,o)},o,function(t,a){return t.length===a.length&&t.every(function(i,l){return i===a[l]})})}function Ge(r){var o,s,t=(0,Ie.isMemo)(r)?r.type.type:r.type;return!(typeof t=="function"&&!((o=t.prototype)!==null&&o!==void 0&&o.render)||typeof r=="function"&&!((s=r.prototype)!==null&&s!==void 0&&s.render))}const M=m.forwardRef((r,o)=>{const{children:s}=r,t=ie("anticon","inline-flex","items-center","text-inherit","text-center","normal-case","align-[-0.125em]","antialiased","leading-[0]");return e.jsx("span",{ref:o,className:t,children:s})});try{M.displayName="IconWrapper",M.__docgenInfo={description:"",displayName:"IconWrapper",props:{}}}catch{}const Ve=(r,o)=>{const{htmlType:s,type:t="default",className:a,children:i,icon:l,disabled:u,size:x="middle",shape:c="default",danger:p,block:ge=!1,ghost:y=!1,...O}=r,_=u,q=Pe(O,["navigate"]),f=x,N=ie("inline-block",{"w-full":ge},{"w-8":c!=="default"&&c==="circle","px-0":c!=="default"&&c==="circle","rounded-full":c!=="default"&&c==="circle"},{"h-8":f==="middle","py-1":f==="middle","px-4":f==="middle","text-sm":f==="middle"},{"h-10":f==="large","py-1.5":f==="large","px-4":f==="large","text-base":f==="large"},{"h-6":f==="small","py-0":f==="small","px-2":f==="small","text-sm":f==="small"},"rounded-md","shadow-md","transition-all",{"bg-write border border-slate-300":t==="default","hover:text-blue-600 hover:border-blue-600":t==="default","active:text-blue-600 active:border-blue-600":t==="default"},{"bg-blue-600 text-white":!y&&t==="primary","hover:bg-blue-400":!y&&t==="primary","active:bg-blue-400":!y&&t==="primary"},{"bg-write border border-slate-300 border-dashed":t==="dashed","hover:text-blue-600 hover:border-blue-600":t==="dashed","active:text-blue-600 active:border-blue-600":t==="dashed"},{"bg-write shadow-none":t==="text","hover:bg-black/[.06] hover:text-black/[.88]":t==="text","active:bg-black/[.06] hover:text-black/[.88]":t==="text"},{"bg-write text-blue-600 shadow-none":t==="link","hover:text-blue-400":t==="link","active:text-blue-400":t==="link"},{"bg-red-600 text-white":p&&!y&&t==="primary","hover:bg-red-400":p&&!y&&t==="primary","bg-white text-red-600 border-red-600":p&&!y&&t!=="primary","hover:text-red-400 hover:border-red-400":p&&!y&&t!=="primary","hover:bg-red-400/[.06]":p&&t==="text"},{"bg-white bg-transparent":y,"text-blue-600 border border-blue-600 hover:text-blue-400 hover:border-blue-400":y&&!p&&t==="primary","text-white border border-white":y&&(t==="default"||t==="dashed"),"bg-white text-red-600 border border-red-600":p&&y,"hover:text-red-400 hover:border-red-400 hover:bg-transparent":p&&y},{"cursor-not-allowed text-gray-400 border-gray-400 bg-gray-300 shadow-none hover:text-gray-400 hover:border-gray-400 hover:bg-gray-300 hover:shadow-none active:text-gray-400 active:border-gray-400 active:bg-gray-300 active:shadow-none":_},a),E=l&&e.jsx(M,{children:l}),I=i,L=G=>{const{onClick:k}=r;if(_){G.preventDefault();return}k==null||k(G)},be=m.createRef(),T=Ne(o,be);return q.href!==void 0?e.jsxs("a",{...q,className:N,onClick:L,ref:T,children:[E,I]}):e.jsxs("button",{...O,type:s,className:N,onClick:L,disabled:_,ref:T,children:[E,I]})},n=m.forwardRef(Ve);try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"text"'},{value:'"ghost"'},{value:'"default"'},{value:'"primary"'},{value:'"dashed"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"circle"'},{value:'"round"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean | { delay?: number; }"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},ghost:{defaultValue:null,description:"",name:"ghost",required:!1,type:{name:"boolean"}},danger:{defaultValue:null,description:"",name:"danger",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"{ icon: string; }"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"{ icon: CSSProperties; }"}},htmlType:{defaultValue:null,description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}}}}}catch{}function ze({title:r,titleId:o,...s},t){return m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":o},s),r?m.createElement("title",{id:o},r):null,m.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))}const We=m.forwardRef(ze),h=We,Fe={title:"General/Button",component:n,tags:["autodocs"],argTypes:{}},b={render:()=>e.jsxs(d,{wrap:!0,children:[e.jsx(n,{type:"primary",children:"Primary Button"}),e.jsx(n,{children:"Default Button"}),e.jsx(n,{type:"dashed",children:"Dashed Button"}),e.jsx(n,{type:"text",children:"Text Button"}),e.jsx(n,{type:"link",children:"Link Button"})]})},v={render:()=>e.jsxs(d,{wrap:!0,children:[e.jsx(n,{type:"primary",size:"small",children:"Primary Button"}),e.jsx(n,{type:"primary",size:"middle",children:"Primary Button"}),e.jsx(n,{type:"primary",size:"large",children:"Primary Button"})]})},B={render:()=>e.jsxs(d,{direction:"vertical",children:[e.jsxs(d,{wrap:!0,children:[e.jsx(n,{type:"primary",shape:"circle",icon:e.jsx(h,{})}),e.jsx(n,{type:"primary",shape:"circle",children:"A"}),e.jsx(n,{type:"primary",icon:e.jsx(h,{}),children:"Search"}),e.jsx(n,{shape:"circle",icon:e.jsx(h,{})}),e.jsx(n,{icon:e.jsx(h,{}),children:"Search"})]}),e.jsxs(d,{wrap:!0,children:[e.jsx(n,{shape:"circle",icon:e.jsx(h,{})}),e.jsx(n,{icon:e.jsx(h,{}),children:"Search"}),e.jsx(n,{type:"dashed",shape:"circle",icon:e.jsx(h,{})}),e.jsx(n,{type:"dashed",icon:e.jsx(h,{}),children:"Search"}),e.jsx(n,{icon:e.jsx(h,{}),href:"https://www.google.com"})]})]})},j={render:()=>e.jsxs(d,{direction:"vertical",children:[e.jsxs(d,{children:[e.jsx(n,{type:"primary",children:"Primary"}),e.jsx(n,{type:"primary",disabled:!0,children:"Primary(disabled)"})]}),e.jsxs(d,{children:[e.jsx(n,{children:"Default"}),e.jsx(n,{disabled:!0,children:"Default(disabled)"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"dashed",children:"Dashed"}),e.jsx(n,{type:"dashed",disabled:!0,children:"Dashed(disabled)"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"text",children:"Text"}),e.jsx(n,{type:"text",disabled:!0,children:"Text(disabled)"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"link",children:"Link"}),e.jsx(n,{type:"link",disabled:!0,children:"Link(disabled)"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"primary",href:"https://ant.design/index-cn",children:"Href Primary"}),e.jsx(n,{type:"primary",href:"https://ant.design/index-cn",disabled:!0,children:"Href Primary(disabled)"})]}),e.jsxs(d,{children:[e.jsx(n,{danger:!0,children:"Danger Default"}),e.jsx(n,{danger:!0,disabled:!0,children:"Danger Default(disabled)"})]}),e.jsxs(d,{children:[e.jsx(n,{danger:!0,type:"text",children:"Danger Text"}),e.jsx(n,{danger:!0,type:"text",disabled:!0,children:"Danger Text(disabled)"})]}),e.jsxs(d,{children:[e.jsx(n,{type:"link",danger:!0,children:"Danger Link"}),e.jsx(n,{type:"link",danger:!0,disabled:!0,children:"Danger Link(disabled)"})]}),e.jsxs(d,{className:"bg-stone-400	p-8",children:[e.jsx(n,{ghost:!0,children:"Ghost"}),e.jsx(n,{ghost:!0,disabled:!0,children:"Ghost(disabled)"})]})]})},S={render:()=>e.jsxs(d,{className:"bg-stone-300	p-8",wrap:!0,children:[e.jsx(n,{type:"primary",ghost:!0,children:"Primary"}),e.jsx(n,{ghost:!0,children:"Default"}),e.jsx(n,{type:"dashed",ghost:!0,children:"Dashed"}),e.jsx(n,{type:"primary",danger:!0,ghost:!0,children:"Danger"})]})},w={render:()=>e.jsxs(d,{direction:"vertical",className:"w-full",children:[e.jsx(n,{type:"primary",block:!0,children:"Primary"}),e.jsx(n,{block:!0,children:"Default"}),e.jsx(n,{type:"dashed",block:!0,children:"Dashed"}),e.jsx(n,{disabled:!0,block:!0,children:"disabled"}),e.jsx(n,{type:"text",block:!0,children:"text"}),e.jsx(n,{type:"link",block:!0,children:"Link"})]})},D={render:()=>e.jsxs(d,{wrap:!0,children:[e.jsx(n,{type:"primary",danger:!0,children:"Primary"}),e.jsx(n,{danger:!0,children:"Default"}),e.jsx(n,{type:"dashed",danger:!0,children:"Dashed"}),e.jsx(n,{type:"text",danger:!0,children:"Text"}),e.jsx(n,{type:"link",danger:!0,children:"Link"})]})};var V,z,W;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Space wrap>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Space>
}`,...(W=(z=b.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var A,H,C;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Space wrap>
      <Button type="primary" size="small">
        Primary Button
      </Button>
      <Button type="primary" size="middle">
        Primary Button
      </Button>
      <Button type="primary" size="large">
        Primary Button
      </Button>
    </Space>
}`,...(C=(H=v.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var $,K,F;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Space direction="vertical">
      <Space wrap>
        <Button type="primary" shape="circle" icon={<MagnifyingGlassIcon />} />
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" icon={<MagnifyingGlassIcon />}>
          Search
        </Button>
        <Button shape="circle" icon={<MagnifyingGlassIcon />} />
        <Button icon={<MagnifyingGlassIcon />}>Search</Button>
      </Space>
      <Space wrap>
        <Button shape="circle" icon={<MagnifyingGlassIcon />} />
        <Button icon={<MagnifyingGlassIcon />}>Search</Button>
        <Button type="dashed" shape="circle" icon={<MagnifyingGlassIcon />} />
        <Button type="dashed" icon={<MagnifyingGlassIcon />}>
          Search
        </Button>
        <Button icon={<MagnifyingGlassIcon />} href="https://www.google.com" />
      </Space>
    </Space>
}`,...(F=(K=B.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var J,Q,U;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Space direction="vertical">
      <Space>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>
          Primary(disabled)
        </Button>
      </Space>
      <Space>
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
      </Space>
      <Space>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>
          Dashed(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="text">Text</Button>
        <Button type="text" disabled>
          Text(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="link">Link</Button>
        <Button type="link" disabled>
          Link(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="primary" href="https://ant.design/index-cn">
          Href Primary
        </Button>
        <Button type="primary" href="https://ant.design/index-cn" disabled>
          Href Primary(disabled)
        </Button>
      </Space>
      <Space>
        <Button danger>Danger Default</Button>
        <Button danger disabled>
          Danger Default(disabled)
        </Button>
      </Space>
      <Space>
        <Button danger type="text">
          Danger Text
        </Button>
        <Button danger type="text" disabled>
          Danger Text(disabled)
        </Button>
      </Space>
      <Space>
        <Button type="link" danger>
          Danger Link
        </Button>
        <Button type="link" danger disabled>
          Danger Link(disabled)
        </Button>
      </Space>
      <Space className="bg-stone-400	p-8">
        <Button ghost>Ghost</Button>
        <Button ghost disabled>
          Ghost(disabled)
        </Button>
      </Space>
    </Space>
}`,...(U=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Space className="bg-stone-300	p-8" wrap>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
      <Button type="primary" danger ghost>
        Danger
      </Button>
    </Space>
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Space direction="vertical" className="w-full">
      <Button type="primary" block>
        Primary
      </Button>
      <Button block>Default</Button>
      <Button type="dashed" block>
        Dashed
      </Button>
      <Button disabled block>
        disabled
      </Button>
      <Button type="text" block>
        text
      </Button>
      <Button type="link" block>
        Link
      </Button>
    </Space>
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,ae,oe;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Space wrap>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
    </Space>
}`,...(oe=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Je=["Basic","Size","Icon","Disabled","Ghost","Block","Danger"];export{b as Basic,w as Block,D as Danger,j as Disabled,S as Ghost,B as Icon,v as Size,Je as __namedExportsOrder,Fe as default};
//# sourceMappingURL=Button.stories-546482ca.js.map

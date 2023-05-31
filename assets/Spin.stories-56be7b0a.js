import{j as e}from"./jsx-runtime-94f6e698.js";import{r as g}from"./index-8db94870.js";import{S as p}from"./Space-01cd2452.js";import{A as M}from"./ArrowPathIcon-73fa607f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-3bb80f25.js";function R(a){const{indicator:m}=a;return m===null?null:e.jsx("span",{className:"anticon inline-flex",children:e.jsxs("svg",{className:"animate-spin h-5 w-5 text-blue-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}const r=a=>{const{spinning:m=!0,delay:F=0,className:H,size:O="default",tip:u,style:G,children:l,...J}=a,[D,K]=g.useState(!0),S=g.useMemo(()=>typeof l<"u",[l]),x=e.jsxs("div",{children:[R(a),u&&S?e.jsx("div",{children:u}):null]});return S?e.jsxs("div",{children:[D&&e.jsx("div",{children:x},"loading"),e.jsx("div",{children:l},"container")]}):x};try{r.displayName="Spin",r.__docgenInfo={description:"",displayName:"Spin",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},spinning:{defaultValue:null,description:"",name:"spinning",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'},{value:'"large"'}]}},tip:{defaultValue:null,description:"",name:"tip",required:!1,type:{name:"ReactNode"}},delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},indicator:{defaultValue:null,description:"",name:"indicator",required:!1,type:{name:"SpinIndicator"}}}}}catch{}const $={title:"Feedback/Spin",component:r,tags:["autodocs"],argTypes:{}},n={render:()=>e.jsx(r,{})},s={render:()=>e.jsxs(p,{size:"middle",children:[e.jsx(r,{size:"small"}),e.jsx(r,{}),e.jsx(r,{size:"large"})]})},i={render:()=>e.jsx("div",{className:"my-4 bg-gray-200 rounded text-center p-10",children:e.jsx(r,{})})},t={render:()=>e.jsx(r,{spinning:!0,children:e.jsx("p",{children:"Loream Loream Loream Loream Loream"})})},o={render:()=>e.jsxs(p,{direction:"vertical",style:{width:"100%"},children:[e.jsxs(p,{children:[e.jsx(r,{tip:"Loading",size:"small",children:e.jsx("div",{className:"content"})}),e.jsx(r,{tip:"Loading",children:e.jsx("div",{className:"content"})}),e.jsx(r,{tip:"Loading",size:"large",children:e.jsx("div",{className:"content"})})]}),e.jsx(r,{tip:"Loading...",children:e.jsx("p",{children:"Loream Loream Loream Loream Loream"})})]})},c={render:()=>e.jsx(r,{indicator:e.jsx(M,{})})},d={render:()=>e.jsx(r,{spinning:!0,delay:500,children:e.jsx("p",{children:"Loream Loream Loream Loream Loream"})})};var L,j,y;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Spin />
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var f,h,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Space size="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var N,z,w;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="my-4 bg-gray-200 rounded text-center p-10">
      <Spin />
    </div>
}`,...(w=(z=i.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var _,V,q;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Spin spinning={true}>
      <p>Loream Loream Loream Loream Loream</p>
    </Spin>
}`,...(q=(V=t.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var I,b,C;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Space direction="vertical" style={{
    width: '100%'
  }}>
      <Space>
        <Spin tip="Loading" size="small">
          <div className="content" />
        </Spin>
        <Spin tip="Loading">
          <div className="content" />
        </Spin>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>

      <Spin tip="Loading...">
        <p>Loream Loream Loream Loream Loream</p>
      </Spin>
    </Space>
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var P,A,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Spin indicator={<ArrowPathIcon />} />
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var k,B,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Spin spinning={true} delay={500}>
      <p>Loream Loream Loream Loream Loream</p>
    </Spin>
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const ee=["Basic","Size","Container","Nested","Tip","Indicator","Delay"];export{n as Basic,i as Container,d as Delay,c as Indicator,t as Nested,s as Size,o as Tip,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=Spin.stories-56be7b0a.js.map

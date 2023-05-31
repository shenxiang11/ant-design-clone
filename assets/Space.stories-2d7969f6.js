import{j as n}from"./jsx-runtime-94f6e698.js";import{S as e}from"./Space-01cd2452.js";import{B as o}from"./Button-effd0daa.js";import{A as P}from"./ArrowDownTrayIcon-780fd6f0.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-3bb80f25.js";const U={title:"Layout/Space",component:e,tags:["autodocs"],argTypes:{size:{control:{type:"number",min:0,max:100,step:1}},split:{control:"text"}}},r={render:i=>n.jsxs(e,{...i,children:["Space",n.jsx(o,{type:"primary",children:"Button 1"}),n.jsx(o,{icon:n.jsx(P,{}),children:"Click to Upload"}),n.jsx(o,{children:"Confirm"})]})},t={args:{direction:"vertical"},render:i=>n.jsxs(e,{...i,children:[n.jsx("div",{children:"Card 1"}),n.jsx("div",{children:"Card 2"}),n.jsx("div",{children:"Card 3"})]})},s={argTypes:{align:{control:"radio"}},render:()=>n.jsxs(e,{children:[n.jsxs(e,{align:"center",children:["center",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(e,{align:"start",children:["start",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(e,{align:"end",children:["end",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(e,{align:"baseline",children:["baseline",n.jsx("div",{className:"bg-cyan-400 h-20 w-10",children:"Primary Text"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]})]})},d={args:{size:40},render:i=>n.jsxs(e,{...i,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})},a={args:{wrap:!0},render:i=>n.jsxs(e,{...i,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})},c={args:{split:n.jsx("s",{children:"|"})},render:i=>n.jsxs(e,{...i,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})};var l,v,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args =>
  // TOOD: 默认 align center？
  <Space {...args}>
      Space
      <Button type="primary">Button 1</Button>
      <Button icon={<ArrowDownTrayIcon />}>Click to Upload</Button>
      <Button>Confirm</Button>
    </Space>
}`,...(u=(v=r.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var m,p,B;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    direction: "vertical"
  },
  render: args => <Space {...args}>
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
    </Space>
}`,...(B=(p=t.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var j,S,y;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var b,N,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(N=a.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var C,k,w;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    split: <s>|</s>
  },
  render: args => <Space {...args}>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
    </Space>
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const V=["Basic","Vertical","Align","CustomSize","Wrap","Split"];export{s as Align,r as Basic,d as CustomSize,c as Split,t as Vertical,a as Wrap,V as __namedExportsOrder,U as default};
//# sourceMappingURL=Space.stories-2d7969f6.js.map

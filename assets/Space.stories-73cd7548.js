import{j as n}from"./jsx-runtime-94f6e698.js";import{S as e}from"./Space-d36a7c75.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const A={title:"Layout/Space",component:e,tags:["autodocs"],argTypes:{size:{control:{type:"number",min:0,max:100,step:1}},split:{control:"text"}}},t={render:i=>n.jsxs(e,{...i,children:["Space",n.jsx("button",{children:"Button 1"}),n.jsx("button",{children:"Button 2"}),n.jsx("button",{children:"Button 3"})]})},r={args:{direction:"vertical"},render:i=>n.jsxs(e,{...i,children:[n.jsx("div",{children:"Card 1"}),n.jsx("div",{children:"Card 2"}),n.jsx("div",{children:"Card 3"})]})},s={argTypes:{align:{control:"radio"}},render:()=>n.jsxs(e,{children:[n.jsxs(e,{align:"center",children:["center",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(e,{align:"start",children:["start",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(e,{align:"end",children:["end",n.jsx("div",{className:"bg-cyan-400 h-20",children:"Primary"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]}),n.jsxs(e,{align:"baseline",children:["baseline",n.jsx("div",{className:"bg-cyan-400 h-20 w-10",children:"Primary Text"}),n.jsx("div",{className:"bg-neutral-400 h-40 inline-flex items-center",children:"Block"})]})]})},d={args:{size:40},render:i=>n.jsxs(e,{...i,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})},a={args:{wrap:!0},render:i=>n.jsxs(e,{...i,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})},c={args:{split:n.jsx("s",{children:"|"})},render:i=>n.jsxs(e,{...i,children:[n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"}),n.jsx("div",{children:"Button"})]})};var o,l,v;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Space {...args}>
      Space
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </Space>
}`,...(v=(l=t.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    direction: "vertical"
  },
  render: args => <Space {...args}>
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
    </Space>
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var B,h,x;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,j,S;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,y,N;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var f,k,C;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    split: <s>|</s>
  },
  render: args => <Space {...args}>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
    </Space>
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const E=["Basic","Vertical","Align","CustomSize","Wrap","Split"];export{s as Align,t as Basic,d as CustomSize,c as Split,r as Vertical,a as Wrap,E as __namedExportsOrder,A as default};
//# sourceMappingURL=Space.stories-73cd7548.js.map

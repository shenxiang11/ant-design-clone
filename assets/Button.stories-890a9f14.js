import{j as e}from"./jsx-runtime-94f6e698.js";import{B as t}from"./Button-effd0daa.js";import{S as n}from"./Space-01cd2452.js";import{M as r}from"./MagnifyingGlassIcon-c61587ec.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-3bb80f25.js";const O={title:"General/Button",component:t,tags:["autodocs"],argTypes:{}},a={render:()=>e.jsxs(n,{wrap:!0,children:[e.jsx(t,{type:"primary",children:"Primary Button"}),e.jsx(t,{children:"Default Button"}),e.jsx(t,{type:"dashed",children:"Dashed Button"}),e.jsx(t,{type:"text",children:"Text Button"}),e.jsx(t,{type:"link",children:"Link Button"})]})};a.storyName="按钮类型";const s={render:()=>e.jsxs(n,{wrap:!0,children:[e.jsx(t,{type:"primary",size:"small",children:"Primary Button"}),e.jsx(t,{type:"primary",size:"middle",children:"Primary Button"}),e.jsx(t,{type:"primary",size:"large",children:"Primary Button"})]})};s.storyName="按钮尺寸";const i={render:()=>e.jsxs(n,{direction:"vertical",children:[e.jsxs(n,{wrap:!0,children:[e.jsx(t,{type:"primary",shape:"circle",icon:e.jsx(r,{})}),e.jsx(t,{type:"primary",shape:"circle",children:"A"}),e.jsx(t,{type:"primary",icon:e.jsx(r,{}),children:"Search"}),e.jsx(t,{shape:"circle",icon:e.jsx(r,{})}),e.jsx(t,{icon:e.jsx(r,{}),children:"Search"})]}),e.jsxs(n,{wrap:!0,children:[e.jsx(t,{shape:"circle",icon:e.jsx(r,{})}),e.jsx(t,{icon:e.jsx(r,{}),children:"Search"}),e.jsx(t,{type:"dashed",shape:"circle",icon:e.jsx(r,{})}),e.jsx(t,{type:"dashed",icon:e.jsx(r,{}),children:"Search"}),e.jsx(t,{icon:e.jsx(r,{}),href:"https://www.google.com"})]})]})};i.storyName="图标按钮";const d={render:()=>e.jsxs(n,{direction:"vertical",children:[e.jsxs(n,{children:[e.jsx(t,{type:"primary",children:"Primary"}),e.jsx(t,{type:"primary",disabled:!0,children:"Primary(disabled)"})]}),e.jsxs(n,{children:[e.jsx(t,{children:"Default"}),e.jsx(t,{disabled:!0,children:"Default(disabled)"})]}),e.jsxs(n,{children:[e.jsx(t,{type:"dashed",children:"Dashed"}),e.jsx(t,{type:"dashed",disabled:!0,children:"Dashed(disabled)"})]}),e.jsxs(n,{children:[e.jsx(t,{type:"text",children:"Text"}),e.jsx(t,{type:"text",disabled:!0,children:"Text(disabled)"})]}),e.jsxs(n,{children:[e.jsx(t,{type:"link",children:"Link"}),e.jsx(t,{type:"link",disabled:!0,children:"Link(disabled)"})]}),e.jsxs(n,{children:[e.jsx(t,{type:"primary",href:"https://ant.design/index-cn",children:"Href Primary"}),e.jsx(t,{type:"primary",href:"https://ant.design/index-cn",disabled:!0,children:"Href Primary(disabled)"})]}),e.jsxs(n,{children:[e.jsx(t,{danger:!0,children:"Danger Default"}),e.jsx(t,{danger:!0,disabled:!0,children:"Danger Default(disabled)"})]}),e.jsxs(n,{children:[e.jsx(t,{danger:!0,type:"text",children:"Danger Text"}),e.jsx(t,{danger:!0,type:"text",disabled:!0,children:"Danger Text(disabled)"})]}),e.jsxs(n,{children:[e.jsx(t,{type:"link",danger:!0,children:"Danger Link"}),e.jsx(t,{type:"link",danger:!0,disabled:!0,children:"Danger Link(disabled)"})]}),e.jsxs(n,{className:"bg-stone-400	p-8",children:[e.jsx(t,{ghost:!0,children:"Ghost"}),e.jsx(t,{ghost:!0,disabled:!0,children:"Ghost(disabled)"})]})]})};d.storyName="不可用状态";const o={render:()=>e.jsxs(n,{className:"bg-stone-300	p-8",wrap:!0,children:[e.jsx(t,{type:"primary",ghost:!0,children:"Primary"}),e.jsx(t,{ghost:!0,children:"Default"}),e.jsx(t,{type:"dashed",ghost:!0,children:"Dashed"}),e.jsx(t,{type:"primary",danger:!0,ghost:!0,children:"Danger"})]})};o.storyName="幽灵按钮";const c={render:()=>e.jsxs(n,{direction:"vertical",className:"w-full",children:[e.jsx(t,{type:"primary",block:!0,children:"Primary"}),e.jsx(t,{block:!0,children:"Default"}),e.jsx(t,{type:"dashed",block:!0,children:"Dashed"}),e.jsx(t,{disabled:!0,block:!0,children:"disabled"}),e.jsx(t,{type:"text",block:!0,children:"text"}),e.jsx(t,{type:"link",block:!0,children:"Link"})]})};c.storyName="Block 按钮";const p={render:()=>e.jsxs(n,{wrap:!0,children:[e.jsx(t,{type:"primary",danger:!0,children:"Primary"}),e.jsx(t,{danger:!0,children:"Default"}),e.jsx(t,{type:"dashed",danger:!0,children:"Dashed"}),e.jsx(t,{type:"text",danger:!0,children:"Text"}),e.jsx(t,{type:"link",danger:!0,children:"Link"})]})};p.storyName="危险按钮";var l,u,y;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Space wrap>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Space>
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var h,B,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var m,g,j;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var b,S,D;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var f,k,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(P=(k=o.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var w,G,L;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(G=c.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var N,T,I;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(T=p.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const R=["Basic","Size","Icon","Disabled","Ghost","Block","Danger"];export{a as Basic,c as Block,p as Danger,d as Disabled,o as Ghost,i as Icon,s as Size,R as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-890a9f14.js.map

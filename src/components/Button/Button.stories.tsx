import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Space } from "../Space";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// TODO: 为什么读不到输入输出

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Basic: Story = {
  render: () => (
    <Space wrap>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Space>
  ),
};

export const Size: Story = {
  render: () => (
    <Space wrap>
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
  ),
};

export const Icon: Story = {
  render: () => (
    <Space direction="vertical">
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
  ),
};

export const Disabled: Story = {
  render: () => (
    <Space direction="vertical">
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
  ),
};

export const Ghost: Story = {
  render: () => (
    <Space className="bg-stone-300	p-8" wrap>
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
  ),
};

// TODO: 多个按钮组合

export const Block: Story = {
  render: () => (
    <Space direction="vertical" className="w-full">
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
  ),
};

export const Danger: Story = {
  render: () => (
    <Space wrap>
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
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import Space from "./Space";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layout/Space",
  component: Space,
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "number", min: 0, max: 100, step: 1 } },
    split: { control: "text" },
  },
} satisfies Meta<typeof Space>;

// TODO: 设置文档的默认值

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  render: (args) => (
    <Space {...args}>
      Space
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
    </Space>
  ),
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => (
    <Space {...args}>
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
    </Space>
  ),
};

// TODO: 间隙大小的 Story

export const Align: Story = {
  argTypes: {
    align: { control: "radio" },
  },
  render: () => (
    <Space>
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
  ),
};

// TODO：可以在这里加 Slider 吗？
export const CustomSize: Story = {
  args: {
    size: 40,
  },
  render: (args) => (
    <Space {...args}>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
    </Space>
  ),
};

// 笑死，我的屏幕大官网例子并不能体现换行
export const Wrap: Story = {
  args: {
    wrap: true,
  },
  render: (args) => (
    <Space {...args}>
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
  ),
};

export const Split: Story = {
  args: {
    split: <s>|</s>,
  },
  render: (args) => (
    <Space {...args}>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
    </Space>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import Spin from "./Spin";
import { Space } from "../Space";
import {ArrowPathIcon} from "@heroicons/react/24/outline";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Feedback/Spin",
  component: Spin,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Spin>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Basic: Story = {
  render: () => <Spin />,
};

export const Size: Story = {
  render: () => (
    <Space size="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
  ),
};

export const Container: Story = {
  render: () => (
    <div className="my-4 bg-gray-200 rounded text-center p-10">
      <Spin />
    </div>
  ),
}

export const Nested: Story = {
  render: () => (
    <Spin spinning={true}>
      <p>Loream Loream Loream Loream Loream</p>
    </Spin>
  ),
}

export const Tip: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
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
  ),
}

export const Indicator: Story = {
  render: () => (
    <Spin indicator={<ArrowPathIcon />} />
  ),
}

export const Delay: Story = {
  render: () => (
    <Spin spinning={true} delay={500}>
      <p>Loream Loream Loream Loream Loream</p>
    </Spin>
  ),
}

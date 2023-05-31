import type { Meta, StoryObj } from "@storybook/react";
import { Space } from "../Space";
import * as outlineIcons from "@heroicons/react/24/outline";
import * as solidIcons from "@heroicons/react/24/solid";

// TODO: 为什么读不到输入输出

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "General/Icons",
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof outlineIcons.MoonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Outline: Story = {
  render: () => (
    <Space wrap className="grid grid-cols-4 gap-4">
      {Object.entries(outlineIcons).map(([key, Icon]) => {
        return (
          <div className="flex flex-col h-16 items-center">
            <Icon style={{ width: '2em', height: '2em'}} key={key} />
            <span className="text-xs mt-2">{key}</span>
          </div>
        )
      })}
    </Space>
  ),
};

export const Solid: Story = {
  render: () => (
    <Space wrap className="grid grid-cols-4 gap-16">
      {Object.entries(solidIcons).map(([key, Icon]) => {
        return (
          <div className="flex flex-col h-16 items-center">
            <Icon style={{ width: '2em', height: '2em'}} key={key} />
            <span className="text-xs mt-2">{key}</span>
          </div>
        )
      })}
    </Space>
  ),
};

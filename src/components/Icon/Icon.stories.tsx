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
    <Space wrap>
      {Object.entries(outlineIcons).map(([key, Icon]) => {
        return (
          <div className="flex flex-col items-center">
            <Icon style={{ width: '3em', height: '3em'}} key={key} />
            <span className="">{key}</span>
          </div>
        )
      })}
    </Space>
  ),
};

export const Solid: Story = {
  render: () => (
    <Space wrap>
      {Object.entries(solidIcons).map(([key, Icon]) => {
        return (
          <div className="flex flex-col items-center">
            <Icon style={{ width: '3em', height: '3em'}} key={key} />
            <span className="">{key}</span>
          </div>
        )
      })}
    </Space>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button/Button.tsx";
import message from "./Message.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Feedback/Message",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Basic: Story = {
  args: {
    onClick: () => {
      message.info("Hello, Ant Design!");
    }
  },
  render: (args) => (
    <Button {...args}>Button</Button>
  ),
};

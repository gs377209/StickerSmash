import { View } from "react-native";
import { MyButton } from "./Button";

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";

const meta = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    // withBackgrounds,
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "plain",
      values: [
        { name: "plain", value: "white" },
        { name: "warm", value: "hotpink" },
        { name: "cool", value: "deepskyblue" },
      ],
    },
  },
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const AnotherExample: Story = {
  args: {
    text: "Another example",
  },
};

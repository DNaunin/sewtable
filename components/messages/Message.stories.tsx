import Welcome from "./Welcome";

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Common/Pages",
  component: Welcome,
} as Meta;

const Template: Story = (args) => <Welcome {...args} />;

export const firstWelcome = Template.bind({});

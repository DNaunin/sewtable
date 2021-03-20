import Welcome from "./Welcome";
import HowTo from "./HowTo";

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "Common/Pages",
  component: Welcome,
} as Meta;

const Template: Story = (args) => <Welcome {...args} />;
const Template2: Story = (args) => <HowTo {...args} />;

export const splashPage = Template.bind({});

export const introPage = Template2.bind({});

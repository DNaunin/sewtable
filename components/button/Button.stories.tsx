import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Common/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonHow = Template.bind({});
ButtonHow.args = {
  label: "How it works",
};

export const ButtonHome = Template.bind({});
ButtonHome.args = {
  label: "Home",
};

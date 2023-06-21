import React from "react";
import Spinner from ".";

/*****************************************************************************/
// Documentation

export default {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    color: { control: "color" },
  },
};

/*****************************************************************************/
// Template

const Template = (args) => <Spinner {...args} />;

/*****************************************************************************/
// Variants

export const Default = Template.bind({});

export const Red = Template.bind({});
Red.args = {
  color: "#ff0000",
};

import React from "react";
import Example from ".";

/*****************************************************************************/
// Documentation

export default {
  title: "Components/Example",
  component: Example,
  // Optionaly we want to setup custom inputs controls
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // color: We set this up here below to override the default behaviour in storybook's presentation
    color: { control: "color" },
    // text: Will be added automatically
    // align: Will be added automatically
  },
};

/*****************************************************************************/
// Template

const Template = (args) => <Example {...args} />;

/*****************************************************************************/
// Variants

export const Default = Template.bind({});

export const Red = Template.bind({});
Red.args = {
  text: "I am red!",
  color: "#ff0000",
};

export const Green = Template.bind({});
Green.args = {
  text: "I am green!",
  color: "#00ff00",
};

export const Blue = Template.bind({});
Blue.args = {
  text: "I am blue!",
  color: "#0000ff",
};

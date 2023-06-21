import React from "react";
import Products from ".";

/*****************************************************************************/
// Documentation

export default {
  title: "Components/Products",
  component: Products,
};

/*****************************************************************************/
// Template

const Template = (args) => <Products {...args} />;

/*****************************************************************************/
// Variants

export const Default = Template.bind({});

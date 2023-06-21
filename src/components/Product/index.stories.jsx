import React from "react";
import Product from ".";

/*****************************************************************************/
// Documentation

export default {
  title: "Components/Product",
  component: Product,
};

/*****************************************************************************/
// Template

const Template = (args) => <Product {...args} />;

/*****************************************************************************/
// Variants

export const Default = Template.bind({});

import React from "react";
import Drawer from ".";

/*****************************************************************************/
// Documentation

export default {
  title: "Components/Drawer",
  component: Drawer,
};

/*****************************************************************************/
// Template

const Template = (args) => <Drawer {...args} />;

/*****************************************************************************/
// Variants

export const Default = Template.bind({});

export const Top = Template.bind({});
Top.args = {
  children: <b>I am on top</b>,
  fromPixel: -1,
  anchor: "top",
};

export const Bottom = Template.bind({});
Bottom.args = {
  children: <b>I am bottom</b>,
  fromPixel: -1,
  anchor: "bottom",
};

export const Right = Template.bind({});
Right.args = {
  children: <b>I am right</b>,
  fromPixel: -1,
  anchor: "right",
};
export const Left = Template.bind({});
Left.args = {
  children: <b>I am left</b>,
  fromPixel: -1,
  anchor: "left",
};

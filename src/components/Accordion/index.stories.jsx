import React from "react";
import Accordion from ".";

/*****************************************************************************/
// Documentation

export default {
  title: "Components/Accordion",
  component: Accordion,
};

/*****************************************************************************/
// Template

const Template = (args) => <Accordion {...args} />;

/*****************************************************************************/
// Variants

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  children: "This text is inside the accordion",
};

const renderExample = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <input type="checkbox" />
          <label>Option 1</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>Option 2</label>
        </li>
        <li>
          <input type="checkbox" />
          <label>Option 3</label>
        </li>
      </ul>
    </React.Fragment>
  );
};

export const Example = Template.bind({});
Example.args = {
  isOpen: true,
  children: renderExample(),
};

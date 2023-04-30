import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./base-layout";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Layout",
  component: Layout
} as ComponentMeta<typeof Layout>;

const navLinks = [
  { path: "/", name: "home" },
  { path: "/todos", name: "todos" }
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

// Passing children as props.
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "some layout page title",
  links: navLinks,
  children: [
    <li key={1}>hello i&apos;m a child</li>,
    <li key={2}>hello i&apos;m a child</li>
  ] // array of jsx elements
};

// Passing children to Layout as a new template
export const Secondary: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <h1 className="text-3xl font-bold underline">I am using Tailwind.</h1>
    <ul>hello world</ul>
  </Layout>
);
Secondary.args = {
  title: "secondary title",
  links: navLinks
};

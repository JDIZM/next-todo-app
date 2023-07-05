import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TodoList from "./todo-list";
import { todos } from "@/data/example-todos.json";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Todos/TodoList",
  component: TodoList
} as ComponentMeta<typeof TodoList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Primary = Template.bind({});
//  More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  todos,
  deleteTodo: () => console.log("delete todo"),
  completeTodo: () => console.log("complete todo")
};

// TODO add more stories
// export const

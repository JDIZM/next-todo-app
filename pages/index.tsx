import type { NextPage, GetServerSidePropsResult } from "next";
import Layout from "@/components/layout/base-layout";
import { Todo } from "../interfaces/todos";
import { TodoForm, TodoList } from "@/components/todos/";
import { useState, FormEvent } from "react";

type PageProps = {
  todos: Todo[];
};

// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props
export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<PageProps>
> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET"
  });
  const todos = await response.json();

  return {
    props: { todos: todos.slice(0, 5) }
  };
}

export const navLinks = [
  { path: "/", name: "home" },
  { path: "/todos", name: "todos" }
];

const Home: NextPage<PageProps> = ({ todos }) => {
  return (
    <Layout links={navLinks}>
      <h1 className="text-3xl font-bold underline mb-4">Todo List</h1>
      <p>built with next.js & tailwind</p>
      <TodoList
        todos={todos}
        deleteTodo={() => console.log("delete todo")}
        completeTodo={() => console.log("complete todo")}
      />
    </Layout>
  );
};

export default Home;

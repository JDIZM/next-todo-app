import type { NextPage, GetServerSidePropsResult } from "next";
import Layout from "@/components/layout/base-layout";
import { Todo } from "../interfaces/todos";
import { TodoList } from "@/components/todos/";
import Link from "next/link";

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

// example using server rendered data.
// but we can't update the data on the server.
// so using a client side rendered list of todos is better for this demo.
const Home: NextPage<PageProps> = ({ todos }) => {
  return (
    <Layout links={navLinks}>
      <h1 className="text-3xl font-bold underline mb-4">Todo List</h1>
      <p>
        This page is rendered server side. The data is fetched from the
        jsonplaceholder api.
      </p>
      <p>
        View a list of todos rendered client side on{" "}
        <Link href="/todos">/todos</Link>
      </p>

      <TodoList
        todos={todos}
        deleteTodo={() => console.log("delete todo")}
        completeTodo={() => console.log("complete todo")}
      />
    </Layout>
  );
};

export default Home;

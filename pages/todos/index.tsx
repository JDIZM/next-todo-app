import type { NextPage, GetServerSidePropsResult } from "next";
import Layout from "@/components/Layout";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

type PageProps = {
  todos: Todo[];
};

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<PageProps>
> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET"
  });
  const todos = await response.json();
  return {
    props: { todos }
  };
}

const navLinks = [
  { path: "/", name: "home" },
  { path: "/todos", name: "todos" }
];

const Home: NextPage<PageProps> = ({ todos }) => {
  return (
    <Layout links={navLinks}>
      <h1 className="text-3xl font-bold underline mb-4">Todo List</h1>
      <p>built with next.js & tailwind</p>
      <ul className="p-2">
        {todos.map((todo) => (
          <li key={todo.id} className="p-4 mb-4 bg-slate-400 rounded">
            {todo.id} - {todo.title}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;

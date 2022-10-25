import type { NextPage } from "next";
import Layout from "@/components/Layout";

const navLinks = [
  { path: "/", name: "home" },
  { path: "/todos", name: "todos" }
];

const Home: NextPage = () => {
  return (
    <Layout links={navLinks}>
      <h1 className="text-3xl font-bold underline mb-4">Todo List</h1>
      <p>built with next.js & tailwind</p>
      <p>
        View the list of{" "}
        <a href="/todos" className="text-fuchsia-700">
          Todos
        </a>
      </p>
    </Layout>
  );
};

export default Home;

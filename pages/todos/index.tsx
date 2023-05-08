import Layout from "@/components/layout/base-layout";
import { NextPage } from "next";
import { navLinks } from "..";

const TodoPage: NextPage = () => {
  return (
    <Layout links={navLinks}>
      <div>
        <h1>Todo Page</h1>
      </div>
    </Layout>
  );
};

export default TodoPage;

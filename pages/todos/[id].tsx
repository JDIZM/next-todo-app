import Layout from "@/components/layout/base-layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { navLinks } from "..";

const TodoItemPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout links={navLinks}>
      <div>
        <h1>Todo Item Page</h1>
        <p>Todo: {router.query.id}</p>
      </div>
    </Layout>
  );
};

export default TodoItemPage;

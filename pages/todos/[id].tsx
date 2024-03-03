import Layout from "@/components/layout/base-layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { navLinks } from "..";
import { useTodosApi } from "@/hooks/use-todos-api";

const TodoItemPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { data, isLoading, error } = useTodosApi(id);

  const [todo] = data;

  return (
    <Layout links={navLinks}>
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {todo && !error && (
        <div>
          <h1>Todo Item Page</h1>
          <p>Todo: {router.query.id}</p>
          <p>{todo.title}</p>
        </div>
      )}
    </Layout>
  );
};

export default TodoItemPage;

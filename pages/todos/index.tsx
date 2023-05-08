import Layout from "@/components/layout/base-layout";
import { NextPage } from "next";
import { navLinks } from "..";
import { TodoForm, TodoList } from "@/components/todos";
import { useTodosApi } from "@/hooks/use-todos-api";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Todo } from "@/interfaces/todos";

const removeTodo = (id: number, setTodos: Dispatch<SetStateAction<Todo[]>>) => {
  console.log("remove todo", id);
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
};

const completeTodo = (
  id: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  console.log("complete todo", id);
};

const addTodo = (value: string, setTodos: Dispatch<SetStateAction<Todo[]>>) => {
  console.log("add todo", value);
  setTodos((prev) => [
    ...prev,
    {
      id: prev.length + 1,
      title: value,
      completed: false
    }
  ]);
};

const TodoPage: NextPage = () => {
  const { data, isLoading, error } = useTodosApi();
  const [todos, setTodos] = useState(data);

  useEffect(() => {
    setTodos(data.slice(0, 10));
    console.log("data changed", data);
  }, [data]);

  return (
    <Layout links={navLinks}>
      <h1 className="text-3xl font-bold underline mb-4">My Todo&apos;s</h1>
      <p>built with next.js & tailwind</p>
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error. Please try refreshing.</p>}
      {data && data.length > 0 && (
        <>
          <TodoForm addTodo={(value) => addTodo(value, setTodos)} />
          <TodoList
            todos={todos}
            deleteTodo={(id) => removeTodo(id, setTodos)}
            completeTodo={(id) => completeTodo(id, setTodos)}
          />
        </>
      )}
    </Layout>
  );
};

export default TodoPage;

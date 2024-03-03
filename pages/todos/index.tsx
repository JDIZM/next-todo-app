import Layout from "@/components/layout/base-layout";
import { NextPage } from "next";
import { navLinks } from "..";
import { TodoForm, TodoList } from "@/components/todos";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Todo } from "@/types/todos";
import { useTodosApi } from "@/hooks/use-todos-api";
import { useLocalStorage } from "@/hooks/use-local-storage";

const saveLocalData = (
  data: Todo[],
  set: (key: string, value: Todo[]) => void
) => set("next-todos", data);

const sortTodos = (todos: Todo[]) => {
  return todos.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (b.id > a.id) {
      return -1;
    }
    return 0;
  });
};

const removeTodo = (id: number, setTodos: Dispatch<SetStateAction<Todo[]>>) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id));
};

const completeTodo = (
  id: number,
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  const completeTodos = (todos: Todo[]) => {
    const result = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    return sortTodos(result);
  };

  setTodos((prev) => completeTodos(prev));
};

const addTodo = (
  value: string,
  todos: Todo[],
  setTodos: Dispatch<SetStateAction<Todo[]>>
) => {
  const isTodoIdInUse = (todos: Todo[], id: number) => {
    return todos.some((todo) => todo.id === id);
  };

  setTodos((prev) => [
    ...prev,
    {
      id: isTodoIdInUse(todos, prev.length + 1)
        ? Math.random() * 10
        : prev.length + 1,
      title: value,
      completed: false
    }
  ]);
};

const TodoPage: NextPage = () => {
  const { data, isLoading, error } = useTodosApi();
  const { get, set } = useLocalStorage<Todo[]>();
  const [todos, setTodos] = useState(data);

  const localData = get("next-todos");

  if (localData && localData.length > 0 && !todos.length) {
    // Set initial data from local storage.
    setTodos(localData);
  }

  if (!isLoading && !todos.length && data.length > 0 && !localData) {
    // Set initial data from API.
    setTodos(data);
  }

  useEffect(() => {
    // when todos change, save to local storage
    if (todos.length > 0) saveLocalData(todos, set);
  }, [todos, set]);

  return (
    <Layout links={navLinks}>
      <h1 className="text-3xl font-bold underline mb-4">My Todo&apos;s</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error. Please try refreshing.</p>}
      {data && data.length > 0 && (
        <>
          <TodoForm addTodo={(value) => addTodo(value, todos, setTodos)} />
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

import { Todo } from "@/interfaces/todos";
import { useEffect, useState } from "react";

export const useTodosApi = (id?: number) => {
  const [data, setData] = useState<Todo[]>([] as Todo[]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const fetchData = async (url: string) => {
    // set loading causes a state change, which causes a re-render #1
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      // set data causes a state change, which causes a re-render #2
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = id
      ? `https://jsonplaceholder.typicode.com/todos/${id}`
      : `https://jsonplaceholder.typicode.com/todos`;

    fetchData(url);
  }, [id]);

  return { data, isLoading, error };
};

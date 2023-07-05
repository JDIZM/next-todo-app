import { Todo } from "@/types/todos";
import { useEffect, useState } from "react";

// https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side
export const useTodosApi = (fetchAll = true, id?: number) => {
  const [data, setData] = useState<Todo[]>([] as Todo[]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(!data.length ? [data] : data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setError(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useTodosApi", { fetchAll, id });
    if (!fetchAll && !id) return;
    const url = `https://jsonplaceholder.typicode.com/todos${
      id ? `/${id}` : ""
    }`;
    fetchData(url);
  }, [id, fetchAll]);

  return { data, isLoading, error };
};

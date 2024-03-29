import { Todo } from "@/types/todos";
import { useEffect, useState } from "react";

// https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side
export const useTodosApi = (id?: string) => {
  const [data, setData] = useState<Todo[]>([] as Todo[]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const fetchData = async (url: string) => {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch(url);
      const { data } = await response.json();

      if (!data) {
        throw new Error("Couldn't fetch any results");
      }

      setData(!data.length ? [data] : data.slice(0, 10));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/todo${id ? `/${id}` : ""}`;
    fetchData(url);
  }, [id]);

  return { data, isLoading, error };
};

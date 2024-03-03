import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/todos.json";
import { Todo } from "@/types/todos";

type ResponseData = {
  data?: Todo;
  success: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { id } = req.query as { id: string };

  if (!id) {
    res.status(400).json({
      message: "id is required",
      success: false
    });
  }

  const todo = data.todos.find((todo) => todo.id === parseFloat(id));

  res.status(200).json({
    data: todo,
    success: todo ? true : false
  });
}

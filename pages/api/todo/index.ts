import type { NextApiRequest, NextApiResponse } from "next";
import type { Todo } from "@/types/todos";
import { todos } from "@/data/todos.json";

type ResponseData = {
  data: Todo[];
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    data: todos,
    success: true
  });
}

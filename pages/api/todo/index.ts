import type { NextApiRequest, NextApiResponse } from "next";
import type { Todo } from "@/types/todos";
import data from "@/data/todos.json";

type ResponseData = {
  data: Todo[];
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    data: data.todos,
    success: true
  });
}

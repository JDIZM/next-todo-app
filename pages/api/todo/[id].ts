import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { id } = req.query as { id: string };

  if (!id) {
    res.status(400).json({
      id: "id is required"
    });
  }

  res.status(200).json({
    id
  });
}

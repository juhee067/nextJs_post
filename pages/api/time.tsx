// pages/api/test.tsx
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let today = new Date();
  return res.status(200).json(today);
}

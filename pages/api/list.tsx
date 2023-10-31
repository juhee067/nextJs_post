// pages/api/test.tsx
import { connectDB } from "@/util/dataBase";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let db = (await connectDB).db("forum"); // 클라이언트로부터 데이터베이스를 얻습니다.
  //하나만 가지고 오고 싶다 findOne()
  let result = await db.collection("post").find().toArray();
  res.status(200).json(result);
}

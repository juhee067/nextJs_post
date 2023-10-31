import { connectDB } from "@/util/dataBase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: {
    method: string;
    status: (arg0: number) => {
      redirect: any;
      (): any;
      new (): any;
      json: { (arg0: any): any; new (): any };
    };
  }
) {
  if (req.method == "POST") {
    if (req.body.title == "") {
      return res.status(400).json("내용을 작성해주세요");
    }

    try {
      let db = (await connectDB).db("forum"); // 클라이언트로부터 데이터베이스를 얻습니다.
      //하나만 가지고 오고 싶다 findOne()
      let result = await db.collection("post").insertOne(req.body);
      // redirect : 페이지 이동
      return res.status(200).redirect("/");
    } catch (error) {}
  }
}

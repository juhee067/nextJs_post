import { connectDB } from "@/util/dataBase";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: {
    redirect(arg0: number, arg1: string);
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
    let data = { title: req.body.title, content: req.body.content };
    let db = (await connectDB).db("forum"); // 클라이언트로부터 데이터베이스를 얻습니다.
    //   $inc : 1 증감
    await db.collection("post").updateOne({ _id: new ObjectId(req.body._id) }, { $set: data });
    res.redirect(302, "/list");
  }
}

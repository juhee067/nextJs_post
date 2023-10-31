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
  if (req.method == "DELETE") {
    let db = (await connectDB).db("forum");
    let result = await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
  }
}

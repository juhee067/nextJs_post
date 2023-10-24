import { connectDB } from "@/util/dataBase";

export default async function Home() {
  // connectDB 모듈을 호출하여 클라이언트를 가져옵니다.
  const db = (await connectDB).db("forum"); // 클라이언트로부터 데이터베이스를 얻습니다.
  let result = await db.collection("post").find().toArray();

  return <div>dd</div>;
}

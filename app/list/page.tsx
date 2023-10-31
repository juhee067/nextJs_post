import { connectDB } from "@/util/dataBase";

import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("forum"); // 클라이언트로부터 데이터베이스를 얻습니다.
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}

import { connectDB } from "@/util/dataBase";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum"); // 클라이언트로부터 데이터베이스를 얻습니다.
  let result = await db.collection("post").find().toArray();
  console.log(result[0]._id);
  return (
    <div className="list-bg">
      {result.map((item: any, i: any) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id}`}>
            <h4>{item.title}</h4>{" "}
          </Link>
          <DetailLink />
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

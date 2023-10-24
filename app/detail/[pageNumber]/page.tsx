import { connectDB } from "@/util/dataBase";
import { ObjectId } from "mongodb";

export default async function Detail(props: any) {
  let db = (await connectDB).db("forum"); // 클라이언트로부터 데이터베이스를 얻습니다.
  //하나만 가지고 오고 싶다 findOne()
  console.log(props);
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.pageNumber) });

  if (result) {
    return (
      <div>
        <h4>상세페이지임</h4>
        <h4>{result.title}</h4>
        <p>{result.content}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>데이터를 찾을 수 없습니다.</p>
      </div>
    );
  }
}

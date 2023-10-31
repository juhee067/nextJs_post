import { connectDB } from "@/util/dataBase";
import { ObjectId } from "mongodb";

export default async function Edit(props: any) {
  let db = (await connectDB).db("forum"); // 클라이언트로부터 데이터베이스를 얻습니다.

  //하나만 가지고 오고 싶다 findOne()
  let result = await db.collection("post").findOne({ _id: new ObjectId(props.params.pageId) });

  return (
    <div>
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input style={{ display: "none" }} name="_id" defaultValue={result._id} />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

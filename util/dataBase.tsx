// nextJs 서버 띄울 때 1번만 실행하면 좋음

import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://woodyj9988:woodyj9988@atlascluster.pqdux1m.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let connectDB: any;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };

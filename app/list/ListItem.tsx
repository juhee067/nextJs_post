"use client";
import Link from "next/link";
import { useEffect } from "react";
import DetailLink from "./DetailLink";

export default function ListItem({ result }: any) {
  return (
    <div className="list-bg">
      {result.map((item: any, i: any) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${item._id}`}>
            <h4>{item.title}</h4>{" "}
          </Link>
          <Link href={`/edit/${item._id}`}>💥</Link>

          <button
            className="list-btn"
            onClick={(e) => {
              fetch(`/api/abc/${result[i]._id}`, {
                method: "POST", // POST 요청으로 변경
              }).then((e: any) => {
                console.log("a");
              });
            }}
          >
            🗑️
          </button>

          <DetailLink />
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

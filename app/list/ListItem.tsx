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
              fetch("/api/post/delete", { method: "DELETE", body: result[i]._id }).then((e: any) => {
                e.target.parentElement.style.opacity = 0;
                setTimeout(() => {
                  e.target.parentElement.style.display = "none";
                }, 1000);
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

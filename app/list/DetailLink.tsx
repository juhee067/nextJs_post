"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        // router.back() 뒤로가기
        // router.forward()앞으로가기
        // router.refresh() 새로고침 : 변동사항있는 일부분만 바꿔줌
        // router.prefetch('주소') 페이지 미리로드,Link를 써도 prefetch기능이 자동으로 써짐
        //usePathname() 쓰면 현재 URL 출력해주고
        // useSearchParams() 쓰면 search parameter (query string) 출력해주고

        router.push("/");
      }}
    >
      버튼
    </button>
  );
}

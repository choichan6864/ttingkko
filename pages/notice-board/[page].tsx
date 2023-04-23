import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface noticeType {
  title: string;
  type: string;
  id: number;
}

export default function Board() {
  const [contents, setContents] = useState<noticeType[]>([]);
  const [aNumberOfPage, setANumberOfPage] = useState<number[]>([]);
  const router = useRouter();
  useEffect(() => {
    if (router.query.page) {
      (async () => {
        const { data } = await axios.get(
          `/api/notice-list/${router.query.page}`
        );
        setContents(data.notice.reverse());
        setANumberOfPage(data.len);
      })();
    }
  }, [router.isReady, router.query]);
  return (
    <>
      <h1>
        <span>게시판</span>
        <Link href="/plus-notice">
          <button className="plus-notice">추가</button>
        </Link>
      </h1>
      <ul className="notice-list">
        <li>
          <div className="notice-type">유형</div>
          <div className="notice-title">제목</div>
        </li>
        {contents.map((data: noticeType, i:number) => {
          return (
            <li key={i}>
              <div className="notice-type">{data.type}</div>
              <Link href={`/notice/${data.id}`} legacyBehavior>
                <a className="notice-title">{data.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="page-buttons">
        {aNumberOfPage.map((data: number, i:number) => {
          return <Link key={i} href={`/notice-board/${data}`}>{data}</Link>;
        })}
      </div>
      <style jsx>
        {`
          .page-buttons {
            display:flex;
            justify-content:center;
          }
          .notice-type {
            border-right: 1px solid white;
            width: 50px;
            text-align: center;
            padding: 4px 10px;
          }
          li:first-child .notice-type {
            font-weight: bold;
          }
          .notice-title {
            padding-left: 12px;
            padding-top: 4px;
          }
          li:first-child .notice-title {
            font-weight: bold;
          }
          li {
            display: flex;
            border: 1px solid white;
          }
          h1 {
            display: flex;
            margin-bottom: 20px;
            gap: 15px;
          }
          .plus-notice {
            background-color: rgb(0, 0, 0, 0);
            cursor: pointer;
            height: 100%;
            border: 1px solid white;
            width: 3rem;
          }
        `}
      </style>
    </>
  );
}

import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function List() {
  const router = useRouter();
  const [listData, setListData] = useState<
    {
      personName: string;
      contentsId: number;
    }[]
  >([]);
  const [aNumberOfPage, setANumberOfPage] = useState<number[]>([]);
  useEffect(() => {
    if (router.query.page) {
      (async () => {
        const data: {
          contents: {
            contentsId: number;
            personName: string;
          }[];
          len: number[];
        } = (await axios.get(`/api/bring-list/${router.query.page}`)).data;
        setListData(data.contents.reverse());
        setANumberOfPage(data.len);
      })();
    }
  }, [router.isReady, router.query]);
  return (
    <>
      <h1>최근 변경</h1>
      <Head>
        <title>List</title>
      </Head>
      {listData
        .map(
          (
            data: {
              personName: string;
              contentsId: number;
            },
            i: number
          ) => {
            return (
              <Link href={`/contents/${data.contentsId}`} key={i}>
                <button className="contents">
                  <div>{data.personName}</div>
                </button>
              </Link>
            );
          }
        )}
      <div className="page-buttons">
        {aNumberOfPage.map((data: number, i:number) => {
          return <Link key={i} href={`/list/${data}`}>{data}</Link>;
        })}
      </div>
      <style jsx>
        {`
          .page-buttons {
            display:flex;
            justify-content:center;
          }
          h1 {
            margin-bottom: 20px;
          }
          button {
            text-align: start;
            border: 1px solid white;
            padding-left: 10px;
            width: 100%;
            cursor: pointer;
            background-color: rgb(0, 0, 0, 0);
            display: block;
            height: 40px;
          }
        `}
      </style>
    </>
  );
}

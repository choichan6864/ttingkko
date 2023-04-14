import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function List() {
  const [listData, setListData] = useState<
    {
      contents: {
        contents: string;
        personName: string;
        listText: string | string[];
      };
      contentsId: number;
    }[]
  >([]);
  useEffect(() => {
    (async () => {
      const data: {
        contentsId: number;
        contents: {
          contents: string;
          personName: string;
          listText: string | string[];
        };
      }[] = (await axios("/api/bring-lists")).data;
      const array: {
        contentsId: number;
        contents: {
          contents: string;
          personName: string;
          listText: string | string[];
        };
      }[] = [];
      data.map(
        (data: {
          contentsId: number;
          contents: {
            contents: string;
            personName: string;
            listText: string | string[];
          };
        }) => {
          array.push({ contentsId: data.contentsId, contents: data.contents });
        }
      );
      setListData(array);
    })();
  }, []);
  return (
    <>
      <h1>최근 변경</h1>
      {listData
        .slice(0)
        .reverse()
        .map(
          (
            data: {
              contents: {
                contents: string;
                personName: string;
                listText: string | string[];
              };
              contentsId: number;
            },
            i: number
          ) => {
            return (
              <Link href={`/contents/${data.contentsId}`} key={i}>
                <button className="contents">
                  <div>{data.contents.personName}</div>
                </button>
              </Link>
            );
          }
        )}
      <style jsx>
        {`
          .contents {
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


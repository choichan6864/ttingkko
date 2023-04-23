import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "@/store/store";

export default function Contents() {
  const stateData = useSelector(
    (state: { activeLogin: boolean; loginLink: string }) => {
      return { login: state.activeLogin, loginLink: state.loginLink };
    }
  );
  const [personNameAndId, setPersonNameAndId] = useState<{
    personName: string;
    idOfWriter: string;
  }>({ personName: "", idOfWriter: "" });
  const { personName, idOfWriter } = personNameAndId;
  const [contents, setContents] = useState<
    { contents: string; listText: string }[]
  >([]);
  const router = useRouter();
  useEffect(() => {
    if (router.query.id)
      (async () => {
        const { data } = await axios.get(`/api/contents/${router.query.id}`);
        const { contents } = data;
        const array: { contents: string; listText: string }[] = [];
        const listArray = [];
        setPersonNameAndId({
          personName: contents.personName,
          idOfWriter: data.id,
        });
        if (typeof contents.contents !== "string")
          contents.contents.map(
            (data: { contents: string; listText: string }, index: number) => {
              array.push({
                listText: contents.listText[index],
                contents: contents.contents[index],
              });
              listArray.push({ active: true, i: index });
            }
          );
        else {
          array.push({
            listText: contents.listText,
            contents: contents.contents,
          });
          listArray.push({ active: true, i: 0 });
        }
        setContents(array);
      })();
  }, [router.isReady, router.query]);
  return (
    <div className="container">
      <h1 className="person-name">
        <span>{personName}</span>
        <div className="writer-and-edit">
          <span className="writer">작성자: {idOfWriter}</span>
          {stateData.login ? (
            <Link href={`/contents/edit/${router.query.id}`}>
              <button className="edit-button">수정</button>
            </Link>
          ) : null}
        </div>
      </h1>
      {contents.map(
        (data: { contents: string; listText: string }, i: number) => {
          return (
            <div className="list" key={i}>
              <h1>
                <span>{i + 1}</span>
                <span>.</span>
                <span className="listText">{data.listText}</span>
              </h1>
              <hr />
              <div
                className="contents"
                dangerouslySetInnerHTML={{ __html: data.contents }}
              ></div>
            </div>
          );
        }
      )}
      <style jsx>
        {`
          .person-name {
            font-size: 40px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
          }
          .writer {
            margin-right: 10px;
            font-size: 16px;
            font-weight: 400;
          }
          .contents {
            padding-left: 1.4rem;
          }
          .list {
            margin-bottom: 20px;
          }
          button {
            cursor: pointer;
            width: 54px;
            background-color: rgb(0, 0, 0, 0);
            border: 1px solid gray;
            height: 100%;
          }
          hr {
            border-bottom: 1px solid white;
            margin-bottom: 20px;
          }
          .container {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ListInput from "@/components/plusListInput.write";
import ToolBar from "@/components/toolbar";
import { useSelector } from "react-redux";

export default function WritingPerson() {
  const [personName, setPersonName] = useState<string>("");
  const [contents, setContents] = useState<
    { contents: string; listText: string }[]
  >([]);
  const [list, setList] = useState<number[]>([]);
  const stateData = useSelector(
    (state: { activeLogin: boolean; loginLink: string }) => {
      return { login: state.activeLogin, loginLink: state.loginLink };
    }
  );
  const router = useRouter();
  const onClickPlusButton = () => {
    setList([...list, !list[0] ? list[list.length - 1] + 1 : 1]);
  };
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) =>
    !list[0] || personName === "" ? e.preventDefault() : null;
  useEffect(() => {
    if (router.query.id)
      (async () => {
        const { data } = await axios.get(`/api/contents/${router.query.id}`);
        const { contents } = data;
        const array: { contents: string; listText: string }[] = [];
        const listArray = [];
        setPersonName(contents.personName);
        if (typeof contents.contents !== "string")
          contents.contents.map(
            (data: { contents: string; listText: string }, index: number) => {
              array.push({
                listText: contents.listText[index],
                contents: contents.contents[index],
              });
              listArray.push(index);
            }
          );
        else {
          array.push({
            listText: contents.listText,
            contents: contents.contents,
          });
          listArray.push(0);
        }
        setList(listArray);
        setContents(array);
      })();
  }, [router.isReady, router.query]);
  return (
    <>
      {stateData.login ? (
        <form action="/api/edit" method="post" onSubmit={onSubmit}>
          <h1>{personName}</h1>
          <input type="hidden" name="personName" value={personName} />
          <ToolBar onClickPlusButton={onClickPlusButton} />
          {list.map((data: number) => {
            return contents.length - 1 >= data ? (
              <ListInput
                Contents={contents[data].contents}
                ListText={contents[data].listText}
                index={data}
                key={data}
              />
            ) : (
              <ListInput Contents="" ListText="" index={data} key={data} />
            );
          })}
          <style jsx>{css}</style>
        </form>
      ) : null}
    </>
  );
}

const css = `
              h1 {
                font-size: 40px;
              }
              .cancel-button {
                cursor: pointer;
                width: 5rem;
                height: 35px;
                color: black;
                border-radius: 10px;
              }
              .save-button {
                color: black;
                cursor: pointer;
                width: 5rem;
                height: 35px;
                border-radius: 10px;
              }
              .plus-input {
                padding-left: 20px;
                height: 50px;
                font-size: 20px;
                margin-bottom: 20px;
                border-radius: 15px;
                color: black;
              }
              input[type="submit"] {
                height: 50px;
              }
              form {
                display: flex;
                flex-direction: column;
                width: 100%;
              }
            `;

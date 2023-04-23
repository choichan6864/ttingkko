import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ListInput from "@/components/plusListInput.write";
import ToolBar from "@/components/toolbar";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "@/store/store";

function WritingPerson() {
  const [personName, setPersonName] = useState<string>("");
  const [list, setList] = useState<{ active: boolean; i: number }[]>([]);
  const [contents, setContents] = useState<
    { contents: string; listText: string }[]
  >([]);
  const stateData = useSelector(
    (state: { activeLogin: boolean; loginLink: string }) => {
      return { login: state.activeLogin, loginLink: state.loginLink };
    }
  );
  const router = useRouter();
  const remove = (index: number) => {
    setList((list: { active: boolean; i: number }[]) => {
      const newList = list.filter(
        (data: { active: boolean; i: number }, i: number) => {
          return i !== index;
        }
      );
      return newList;
    });
  };
  const setListToTrue = (index: number) => {
    setList((data: any) => {
      const array = data;
      array[index] = { active: true, i: index };
      return array;
    });
  };
  const setListToFalse = (index: number) => {
    setList((data: any) => {
      const array = data;
      array[index] = { active: false, i: index };
      return array;
    });
  };
  const onClickPlusButton = () => {
    const index = list.length;
    setList([...list, { active: false, i: index }]);
  };
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    console.log(list);
    !list[0] || personName === "" ? e.preventDefault() : null;
  };
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
          {list.map((data: { active: boolean; i: number }, i: number) => {
            return contents.length - 1 >= i ? (
              <ListInput
                Contents={contents[i].contents}
                ListText={contents[i].listText}
                remove={() => remove(i)}
                index={i}
                setListToTrue={() => setListToTrue(i)}
                setListToFalse={() => setListToFalse(i)}
                key={data.i}
              />
            ) : (
              <ListInput
                Contents=""
                ListText=""
                remove={() => remove(i)}
                index={i}
                setListToTrue={() => setListToTrue(i)}
                setListToFalse={() => setListToFalse(i)}
                key={data.i}
              />
            );
          })}
          <style jsx>
            {`
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
            `}
          </style>
        </form>
      ) : null}
    </>
  );
}

export default function WritePerson() {
  return <WritingPerson />;
}

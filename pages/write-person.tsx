import { ChangeEvent, useEffect, useState, ReactElement } from "react";
import ListInput from "@/components/plusListInput.write";
import FunctionButton from "@/components/functionButton";
import ToolBar from "@/components/toolbar";

function WritingPerson() {
  const [personName, setPersonName] = useState<string>("");
  const [list, setList] = useState<{ active: boolean; i: number }[]>([]);
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
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonName(e.target.value);
  };
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    console.log(list);
    !list[0] || personName === "" ? e.preventDefault() : null;
  };
  return (
    <form action="/api/write" method="post" onSubmit={onSubmit}>
      <input
        name="personName"
        className="plus-input"
        placeholder="이름"
        type="text"
        onChange={onChange}
      ></input>
      <ToolBar onClickPlusButton={onClickPlusButton} />
      {list.map((data: { active: boolean; i: number }, i: number) => {
        return (
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
  );
}

export default function WritePerson() {
  return <WritingPerson />;
}
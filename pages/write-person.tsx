import { ChangeEvent, useEffect, useState } from "react";
import ListInput from "@/components/plusListInput.write";
import ToolBar from "@/components/toolbar";
import { useSelector } from "react-redux";

export default function WritingPerson() {
  const [personName, setPersonName] = useState<string>("");
  const [list, setList] = useState<number[]>([]);
  const [submiting, setSumbiting] = useState<boolean>(false);
  const stateData = useSelector(
    (state: { activeLogin: boolean; loginLink: string }) => {
      return { login: state.activeLogin, loginLink: state.loginLink };
    }
  );
  const onClickPlusButton = () =>
    setList([...list, list.length > 0 ? list[list.length - 1] + 1 : 0]);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPersonName(e.target.value);
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    const { listText, contents } = e.target;
    if (
      !listText ||
      !listText.value ||
      !contents.value ||
      !contents ||
      personName === ""
    ) {
      e.preventDefault();
    }
    else
      setSumbiting(true);
  };
  useEffect(() => {
    const onBeforeUnload = (e: any) => {
      if (!submiting) e.returnValue = true;
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [submiting]);
  return (
    <>
      {stateData.login ? (
        <form action="/api/write" method="post" onSubmit={onSubmit}>
          <input
            name="personName"
            className="plus-input"
            placeholder="이름"
            type="text"
            onChange={onChange}
          ></input>
          <ToolBar onClickPlusButton={onClickPlusButton} />
          {list.map((data: number) => {
            return (
              <ListInput Contents="" ListText="" index={data} key={data} />
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
                border-radius: 5px;
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

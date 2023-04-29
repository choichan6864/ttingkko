import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PlusNotice() {
  const [personName, setPersonName] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [submiting, setSumbiting] = useState<boolean>(false);
  const stateData = useSelector(
    (state: { activeLogin: boolean; loginLink: string }) => {
      return { login: state.activeLogin, loginLink: state.loginLink };
    }
  );
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonName(e.target.value);
  };
  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    if (text === "" || personName === "" || type === "") {
      e.preventDefault();
      setSumbiting(false);
    }
    else
      setSumbiting(true);
  };
  const onChangeText = (e: ChangeEvent<HTMLDivElement>) => {
    setText(e.target.innerHTML);
  };
  const onChangeOpt = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };
  useEffect(() => {
    const onBeforeUnload = (e: any) => {
      if (!submiting) e.returnValue = true;
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [submiting]);
  return (
    <>
      {stateData.login ? (
        <form action="/api/plus-notice" method="post" onSubmit={onSubmit}>
          <input
            name="title"
            className="plus-input"
            placeholder="제목"
            type="text"
            onChange={onChange}
          ></input>
          <label htmlFor="select">이 글을 쓰는 이유</label>
          <select name="type" id="select" onChange={onChangeOpt}>
            <option value="">선택</option>
            <option value="오류">오류</option>
          </select>
          <div className="input-group">
            {text === "" ? (
              <div className="text-placeholder">내용을 입력하세요</div>
            ) : null}
            <div
              contentEditable
              className="text-input"
              onInput={onChangeText}
            ></div>
          </div>
          <input type="hidden" name="text" value={text}></input>
          <div>
            <button className="submit-button" type="submit">
              제출
            </button>
          </div>
          <style jsx>
            {`
              select {
                color: black;
                margin-bottom: 20px;
                height: 25px;
              }
              option {
                color: black;
              }
              .text-placeholder {
                padding-top: 7px;
                font-size: 12px;
                padding-left: 10px;
                color: rgb(255, 255, 255, 0.5);
                position: absolute;
              }
              .submit-button {
                cursor: pointer;
                background-color: rgb(80, 80, 80, 80);
                padding: 7px;
                position: relative;
                right: 0;
                font-size: 12px;
                border-radius: 5px;
              }
              .text-input {
                border: 1px solid white;
                padding: 5px 0 5px 10px;
                position: relative;
                border-radius: 5px;
              }
              .input-group {
                margin-bottom: 20px;
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

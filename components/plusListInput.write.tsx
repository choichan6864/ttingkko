import { ChangeEvent, useEffect, useRef, useState } from "react";
import FunctionButton from "./functionButton";

export default function ListInput({
  index,
  Contents,
  ListText,
}: {
  index: number;
  Contents: string;
  ListText: string;
}) {
  const [bool, setBool] = useState<boolean>(true);
  const [ifItIsRead, setIfItisRead] = useState(ListText !== "");
  const [input, setInput] = useState({
    listText: ListText,
    contents: Contents,
  });

  const contentsRef = useRef<HTMLDivElement>(null);
  const listTextRef = useRef<HTMLDivElement>(null);
  const { listText, contents } = input;
  const onInputContents = (e: ChangeEvent<HTMLDivElement>) =>
    setInput({ contents: e.target.innerHTML, listText });
  const onInputListName = (e: ChangeEvent<HTMLDivElement>) =>
    setInput({
      contents,
      listText: e.target.innerHTML,
    });
  const onClickCancelButton = () => setBool(false);
  const onClickSaveButton = () => {
    if (input.contents !== "" && input.listText !== "") {
      setIfItisRead(true);
    }
  };

  useEffect(() => {
    listTextRef.current?.focus();
  }, [ifItIsRead]);
  
  return (
    <>
      {bool ? (
        <>
          {!ifItIsRead ? (
            <>
              <div className="element-to-plus">
                <div className="input-group">
                  {listText === "" ? (
                    <div className="list-name-input-placeholder input-placeholder">
                      추가할 이름
                    </div>
                  ) : null}
                  <div
                    onInput={onInputListName}
                    contentEditable
                    onFocus={(e: ChangeEvent<HTMLDivElement>) => {
                      if (e.target.innerHTML !== listText) {
                        e.target.innerHTML = listText;
                        contentsRef.current?.focus();
                      }
                    }}
                    ref={listTextRef}
                    className="input list-name-input"
                  ></div>
                </div>
                <hr />
                <div className="input-group">
                  {contents === "" ? (
                    <div className="input-placeholder contents-input-placeholder ">
                      내용
                    </div>
                  ) : null}
                  <div
                    onInput={onInputContents}
                    contentEditable
                    ref={contentsRef}
                    onFocus={(e: ChangeEvent<HTMLDivElement>) => {
                      if (e.target.innerHTML !== contents) {
                        e.target.innerHTML = contents;
                        listTextRef.current?.focus();
                      }
                    }}
                    className="input content-input"
                  ></div>
                </div>
              </div>
              <div>
                <button
                  onClick={onClickCancelButton}
                  className="cancel-button"
                  type="button"
                >
                  취소
                </button>
                <button
                  onClick={onClickSaveButton}
                  className="save-button"
                  type="button"
                >
                  저장
                </button>
              </div>
            </>
          ) : (
            <div className="list" key={index}>
              <h1>
                <span>{index + 1}</span>
                <span>.</span>
                <span className="listText">{listText}</span>
                <FunctionButton //삭제 버튼
                  text="🗑"
                  mod="button"
                  event={() => {
                    setBool(false);
                  }}
                  title="수정"
                />
                <FunctionButton //수정 버튼
                  text="🖍"
                  mod="button"
                  event={() => {
                    setIfItisRead(false);
                  }}
                  title="수정"
                />
              </h1>
              <hr />
              <div
                className="contents"
                dangerouslySetInnerHTML={{ __html: contents }}
              ></div>
              <input
                type="hidden"
                name="listText"
                value={input.listText}
              ></input>
              <input
                type="hidden"
                name="contents"
                value={input.contents}
              ></input>
            </div>
          )}
          <style jsx>{`
            .list-name-input-placeholder {
              font-size: 16px;
              padding-top: 14px;
            }
            .contents-input-placeholder {
              font-size: 12px;
              padding-top: 7px;
            }
            .input-placeholder {
              position: absolute;
              padding-left: 10px;
              color: rgb(255, 255, 255, 0.5);
            }
            .input-group {
              display: flex;
            }
            .input {
              position: relative;
              left: 0;
              width: 100%;
              border: 1px solid white;
              border-radius: 5px;
              margin-bottom: 20px;
              color: white;
            }
            .list-name-input {
              padding: 10px 0 10px 10px;
              font-size: 25px;
              font-weight: bold;
            }
            .content-input {
              padding: 5px 0 5px 10px;
            }
            .element-to-plus {
              display: flex;
              flex-direction: column;
            }
            hr {
              border-bottom: 1px solid white;
              margin-bottom: 20px;
            }
            .plus-list-input {
              padding-left: 10px;
              height: 35px;
              font-size: 15px;
              border-radius: 8px;
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
            .contents {
              padding-left: 1.4rem;
            }
            .list-group {
              display: flex;
              flex-direction: column;
            }
            .list {
              margin-bottom: 20px;
            }
            .listText {
              flex: 1;
            }
            h1 {
              font-size: 25px;
              display: flex;
              height: 40px;
              align-items: center;
            }
          `}</style>
        </>
      ) : null}
    </>
  );
}

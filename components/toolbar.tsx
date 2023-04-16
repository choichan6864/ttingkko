import { useEffect, useState } from "react";
import FunctionButton from "./functionButton"

export default function ToolBar({onClickPlusButton}:{onClickPlusButton: () => void}) {
  const [submiting, setSumbiting] = useState<boolean>(false);
  const [fixedToolBar, setFixedToolBar] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150 && !fixedToolBar) setFixedToolBar(true);
      else setFixedToolBar(false);
    });
  }, []);
  useEffect(() => {
    const onBeforeUnload = (e: any) => {
      e.preventDefault();
      if (!submiting) e.returnValue = true;
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [submiting]);
    return <div className="tool-bar">
        <FunctionButton
          mod="button"
          text="+"
          event={onClickPlusButton}
          title="목록 추가"
        />
        <FunctionButton text="📄" mod="submit" event={() => {setSumbiting(true)}} title="저장" />
        <FunctionButton text="🖼" mod="button" event={() => {}} title="이미지 추가" />
        <style jsx>{`
          .tool-bar {
            height: 40px;
            ${fixedToolBar ? "position: fixed;" : "margin-bottom:20px;"}
            background-color:rgb(80, 80, 80);
            display: flex;
            z-index: 1;
            max-width: 1000px;
            width: 100%;
            top: 90px;
          }
        `}</style>
      </div>
}
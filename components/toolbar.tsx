import { useEffect, useState } from "react";
import FunctionButton from "./functionButton"

export default function ToolBar({onClickPlusButton}:{onClickPlusButton: () => void}) {
  const [fixedToolBar, setFixedToolBar] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150 && !fixedToolBar) setFixedToolBar(true);
      else setFixedToolBar(false);
    });
  }, []);
    return <div className="tool-bar">
        <FunctionButton
          mod="button"
          text="+"
          event={onClickPlusButton}
          title="목록 추가"
        />
        <FunctionButton text="📄" mod="submit" event={() => {}} title="저장" />
        <FunctionButton text="🖼" mod="button" event={() => {}} title="이미지 추가" />
        <style jsx>{`
          .tool-bar {
            height: 40px;
            ${fixedToolBar ? "position: fixed;" : "margin-bottom:20px;"}
            background-color:rgb(50, 50, 50);
            display: flex;
            z-index: 1;
            max-width: 1000px;
            width: 100%;
            top: 90px;
          }
        `}</style>
      </div>
}
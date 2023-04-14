import axios from "axios";
import { useEffect } from "react";

function SearchWordWindow() {
  return (
    <div className="search-word-window">
      <div className="ranking">
        <h1>1</h1>
        <h2 className="text-in-search">띵꼬위키</h2>
      </div>
      <div className="ranking">
        <h2>2</h2>
        <h3 className="text-in-search">민욱킴</h3>
      </div>
      <div className="ranking">
        <h2>3</h2>
        <h3 className="text-in-search">띵꼬위키</h3>
      </div>
      <div className="ranking">
        <h2>4</h2>
        <h3 className="text-in-search">띵꼬위키</h3>
      </div>
      <style jsx>
        {`
          .text-in-search {
            padding-left: 0.5rem;
          }
          .ranking:not(:first-child) {
            padding-left: 0.5rem;
          }
          .ranking {
            display: flex;
          }
          .search-word-window {
            padding-left: 0.8rem;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

export default function Home() {
  return (
    <div className="main-of-home">
      <div className="div-of-main">
        <h1>전세계 1위 검색어</h1>
        <SearchWordWindow />
      </div>
      <style jsx>
        {`
          .main-of-home {
            height: 40rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              to bottom,
              white,
              white,
              white,
              white,
              white,
              white,
              black       
              );
            );
          }
          .div-of-main {
            height: 30rem;
            width: 100%;
            max-width: 50rem;
            background-color: red;
          }
        `}
      </style>
    </div>
  );
}


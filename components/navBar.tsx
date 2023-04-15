import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchInput from "./search-input";

function LinkButton({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link href={href}>
        <button>{text}</button>
      </Link>
      <style jsx>
        {`
          button {
            height: 100%;
            cursor: pointer;
            background-color: rgb(0, 0, 0, 0);
            color: white;
            width: 100px;
          }
          li {
            display: inline-block;
            height: 100%;
          }
        `}
      </style>
    </li>
  );
}

export default function NavBar() {
  const [headerData, setHeaderData] = useState({
    login: false,
    loginLink: "/",
  });
  const [activeSearchInp, setSearchInp] = useState<boolean>(false);
  const setSearchInpToFalse = () => setSearchInp(false);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/header-data");
      setHeaderData(data);
    })();
  }, []);
  return (
    <>
      <header>
        <nav>
          <Link href={"/"} target="_self" legacyBehavior>
            <a className="logo"></a>
          </Link>
          <ul className="link-list">
            <LinkButton href="/list" text="목록" />
            <LinkButton href="/" text="홈" />
            {headerData.login ? (
              <LinkButton href="user-info" text="내 정보" />
            ) : (
              <LinkButton href={headerData.loginLink} text="로그인" />
            )}
          </ul>
          <ul>
            <li>
              <button
                onClick={() => setSearchInp(true)}
                className="active-search-input"
              >
                검색
              </button>
              <Link href="/write-person">
                <button className="write-pesron">쓰기</button>
              </Link>
            </li>
          </ul>
        </nav>
        <style jsx>{`
          .active-search-input {
            height: 90px;
            width: 4rem;
            cursor: pointer;
            background-color: rgb(0, 0, 0, 0);
          }
          .logo {
            background-image: url("/logo.png");
            width: 160px;
            height: 90px;
          }
          li {
            display: inline-block;
          }
          .write-pesron {
            height: 90px;
            width: 4rem;
            cursor: pointer;
            color: white;
            background-color: rgb(0, 0, 0, 0);
          }
          header {
            height: 90px;
            // background: linear-gradient(to right bottom, red, blue);
            position: fixed;
            background-color: rgb(0, 0, 150);
            border-bottom: 1px solid black;
            top: 0;
            z-index: 5;
            width: 100%;
          }

          nav {
            display: flex;
            height: 100%;
            margin: auto;
            max-width: 1280px;
          }
          .link-list {
            flex: 1;
          }
        `}</style>
      </header>

      {activeSearchInp ? <SearchInput event={setSearchInpToFalse} /> : null}
    </>
  );
}

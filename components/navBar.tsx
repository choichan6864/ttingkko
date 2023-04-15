import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchInput from "./search-input";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "@/store/store";

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
  const dispatch = useDispatch<any>();
  const [activeSearchInp, setSearchInp] = useState<boolean>(false);
  const headerData = useSelector(
    (state: { activeLogin: boolean; loginLink: string }) => {
      return { login: state.activeLogin, loginLink: state.loginLink };
    }
  );
  const setSearchInpToFalse = () => setSearchInp(false);
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <>
      <header>
        <nav>
          <Link href={"/"} target="_self" legacyBehavior>
            <a className="logo">
              <Image width={90} alt="" height={90} src="/logo.png"></Image>
            </a>
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
              {headerData.login ? (
                <Link href="/write-person">
                  <button className="write-pesron">쓰기</button>
                </Link>
              ) : null}
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
            width: 90px;
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
            background-color: rgb(64, 64, 64);
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

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

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

function SearchButton() {
  const [result, setResult] = useState<
    { contentsId: number; personName: string }[]
  >([]);
  const [active, setActive] = useState<boolean>(false);
  const [upUl, setUpUl] = useState<boolean>(false);
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      const { data } = await axios.get(`/api/search/${e.target.value}`);
      setResult(data);
    } else setResult([]);
  };
  const onFocus = () => {
    setActive(true);
  };
  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (!upUl) setActive(false);
  };
  const onMouseOver = () => {
    setUpUl(true);
  };
  const onMouseOut = () => {
    setUpUl(false);
  };
  return (
    <li className="search">
      <form>
        <input
          onFocus={onFocus}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
        ></input>
        <button type="submit" className="search-button">
          <Image src="/search-logo.png" alt="" width={40} height={40}></Image>
        </button>
      </form>
      <ul onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        {active
          ? result.map((data: { contentsId: number; personName: string }) => {
              return (
                <li key={data.personName} className="search-result">
                  <Link
                    href={`/contents/${data.contentsId}`}
                    onClick={() => {
                      setUpUl(false);
                      setActive(false);
                    }}
                  >
                    <button className="Link-Button">{data.personName}</button>
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
      <style jsx>
        {`
          * {
            color: black;
          }
          .search {
            height: 100%;
          }
          ul {
            display: flex;
            position: fixed;
            flex-direction: column;
          }
          li {
            display: inline-block;
          }
          form {
            align-items: center;
            display: flex;
            height: 90px;
          }
          .Link-Button {
            height: 30px;
            width: 12rem;
            cursor: pointer;
            background-color: white;
            text-align: start;
            padding-left: 0.9rem;
          }
          .Link-Button:hover {
            background-color: rgb(229, 229, 229);
          }
          input {
            height: 35px;
            border: 1px solid black;
            border-radius: 15px;
            padding-left: 1rem;
            outline: none;
            font-size: 14px;
          }
          .search-button {
            position: relative;
            right: 40px;
            height: 40px;
            cursor: pointer;
            width: 40px;
            background-color: rgb(0, 0, 0, 0);
          }
        `}
      </style>
    </li>
  );
}

export default function NavBar() {
  const [headerData, setHeaderData] = useState({login:false, loginLink:"/"});
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/header-data");
      setHeaderData(data);
    })();
  }, []);
  // console.log()
  return (
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
            <LinkButton
              href={headerData.loginLink}
              text="로그인"
            />
          )}
        </ul>
        <ul>
          <SearchButton />
          <li>
            <Link href="/write-person">
              <button className="write-pesron">쓰기</button>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
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
          z-index: 50;
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
  );
}

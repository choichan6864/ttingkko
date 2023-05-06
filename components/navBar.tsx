import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchInput from "./search-input";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "@/store/store";

function LinkButton({ href, text, padding }: { href: string; text: string, padding?: boolean }) {
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
            ${padding ? 'padding: 20px;' : ''}
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

function LinkList({ headerData, flex }: { headerData: { login: boolean, loginLink: string }, flex?: boolean }) {
  const [activeSearchInp, setSearchInp] = useState<boolean>(false);
  const setSearchInpToFalse = () => setSearchInp(false);
  return (
    <ul className="link-list">
      {flex ? <>
        <li>
          <input onClick={() => setSearchInp(true)} />
          <Image
            width={45}
            height={45}
            alt=""
            src="/search-logo.png"
            style={{ position: "relative", bottom: "7px", left: "80px" }}
          ></Image>
        </li>
        {activeSearchInp ? <SearchInput event={setSearchInpToFalse} /> : null}
      </> : null}
      <LinkButton href="/list/1" text="목록" padding={true} />
      <LinkButton href="/notice-board/1" text="게시판" padding={true} />
      {headerData.login ? (
        <LinkButton href="/user-info" text="내 정보" padding={true} />
      ) : (
        <LinkButton href="/api/discord-login" text="로그인" padding={true} />
      )}
      <style jsx>
        {`
          input {
            position:absolute;
            height:30px;
            width:200px;
            border-radius:10px;
          }
          button {
            display:flex;
            height: 100%;
            cursor: pointer;
            background-color: rgb(0, 0, 0, 0);
            color: white;
          }
          li {
            padding-top:20px;
            justify-content:center;
            display: inline-flex;
            height: 100%;
          }
          .link-list {
            flex: 2;
            ${flex ? 'display:flex;flex-direction:column;text-align:center;' : ''}
          }
        `}
      </style>
    </ul>
  )
}


function WriteBtn({ login, mobile }: { login: boolean, mobile?: boolean }) {
  return <>
    {login ? (
      <li>
        <Link href="/write-person" >
          <button>
            <Image
              width={20}
              height={20}
              src="/write-logo.png"
              alt=""
            ></Image>
          </button>
        </Link>
        <style jsx>{`
          li {
            display:inline-block;
            ${mobile ? "position:absolute;left:0;" : ""}
          }
          button {
            background-color: rgb(0, 0, 0, 0);
            height: 90px;
            width: 4rem;
            cursor: pointer;
            color: white;
          }
          `}</style>
      </li>
    ) : null}
  </>
}

function SearchBtnAndWriteBtn({ login }: { login: boolean }) {
  const [activeSearchInp, setSearchInp] = useState<boolean>(false);
  const setSearchInpToFalse = () => setSearchInp(false);
  return <>
    <ul>
      <li className="function-button">
        <button
          onClick={() => setSearchInp(true)}
          className="active-search-input"
        >
          <Image
            width={45}
            height={45}
            alt=""
            src="/search-logo.png"
          ></Image>
        </button>
        <WriteBtn login={login} />
      </li>
      <style jsx>
        {`
          li {
            display: inline-block;
          }
          .active-search-input {
            height: 90px;
            width: 4rem;
            cursor: pointer;
            background-color: rgb(0, 0, 0, 0);
          }
          .function-button {
            display: flex;
          }
      `}
      </style>
    </ul>
    {activeSearchInp ? <SearchInput event={setSearchInpToFalse} /> : null}
  </>
}

function MenuBar({ headerData }: { headerData: { login: boolean, loginLink: string } }) {
  const [bool, setBool] = useState(false);
  const onClick = () => {
    setBool(!bool);
  }
  return <>
    {bool ? <ul>
      <LinkList headerData={headerData} flex={true} />
    </ul> : null}
    <button className="menu-bar" onClick={onClick}>
      <Image src="/Image/menu-bar.png" width={30} height={30} alt=""></Image>
    </button>
    <style jsx>
      {`
        ul {
          background-color:rgb(70, 70, 70);
          width:100%;
          position:fixed;
          top:90px;
        }
          .menu-bar {
            background-color: rgb(0, 0, 0, 0);
            cursor:pointer;
            position:absolute;
            right:0;
            height:90px;
            width:90px;
          }
      `}
    </style>
  </>
}

export default function NavBar() {
  const dispatch = useDispatch<any>();
  const headerData = useSelector(
    (state: { activeLogin: boolean; loginLink: string }) => {
      return { login: state.activeLogin, loginLink: state.loginLink };
    }
  );
  const [width, setWidth] = useState(0);
  useEffect(() => {
    dispatch(getUserInfo());
    setWidth(window.innerWidth);
    window.addEventListener("resize", (e: any) => {
      setWidth(window.innerWidth);
    })
  }, []);
  return (
    <>
      <header>
        <nav>
          <Link href={"/"} target="_self" legacyBehavior>
            <a className="logo">
              <Image
                width={90}
                alt=""
                priority
                height={90}
                src="/Image/logo.png"
              ></Image>
            </a>
          </Link>
          {width > 767 ? (
            <>
              <LinkList headerData={headerData} />
              <SearchBtnAndWriteBtn login={headerData.login} />
            </>
          ) :
            <>
              <MenuBar headerData={headerData} />
              <WriteBtn login={headerData.login} mobile={true} />
            </>
          }
        </nav >
        <style jsx>{`
          .logo {
            width: 90px;
            height: 90px;
            ${width <= 767 ? "margin:auto;" : ""}
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
            max-width: 1000px;
          }
        `}</style>
      </header >
    </>
  );
}

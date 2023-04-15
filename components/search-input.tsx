import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

export default function SearchInput({ event }: { event: () => void }) {
  const [result, setResult] = useState<
    { contentsId: number; personName: string }[]
  >([]);
  const [active, setActive] = useState<boolean>(false);
  const [upUl, setUpUl] = useState<boolean>(false);
  const inpRef = useRef<HTMLInputElement>(null);
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      const { data } = await axios.get(`/api/search/${e.target.value}`);
      setResult(data);
    } else setResult([]);
  };
  const onkeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode == 27) event();
  };
  const onFocus = () => setActive(true);
  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    if (!upUl) {
      setActive(false);
    }
  };
  const onMouseOver = () => setUpUl(true);
  const onClick = (e: any) => {
    if (inpRef.current && !inpRef.current.contains(e.target)) event();
  };
  const onMouseOut = () => setUpUl(false);
  useEffect(() => {
    inpRef.current?.focus();
  });
  return (
    <div className="search-window" onClick={onClick}>
      <div className="search">
        <form>
          <input
            ref={inpRef}
            onKeyDown={onkeydown}
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
                    <Link href={`/contents/${data.contentsId}`}>
                      <button className="Link-Button">{data.personName}</button>
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <style jsx>
        {`
          * {
            color: black;
          }
          .search-window {
            background-color: rgb(0, 0, 0, 0.5);
            width: 100%;
            position: fixed;
            z-index: 6;
            top: 0;
            height: 100vh;
          }
          .search {
            max-width: 1000px;
            position: relative;
            top: 200px;
            margin: auto;
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
            height: 60px;
            border: 1px solid black;
            border-radius: 10px;
            padding-left: 16px;
            width: 100%;
            outline: none;
            font-size: 20px;
          }
          .search-button {
            position: absolute;
            right: 0;
            height: 60px;
            width: 60px;
            cursor: pointer;
            background-color: rgb(0, 0, 0, 0);
          }
        `}
      </style>
    </div>
  );
}

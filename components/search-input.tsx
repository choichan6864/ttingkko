import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

export default function SearchInput({ event }: { event: () => void }) {
  const [result, setResult] = useState<
    { contentsId: number; personName: string }[]
  >([]);
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
  const onClick = (e: any) => {
    if (inpRef.current && !inpRef.current.contains(e.target)) event();
  };
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
            onChange={onChange}
            placeholder="검색어를 입력하세요"
            autoComplete="off"
          ></input>
          <button type="submit" className="search-button">
            <Image src="/search-logo.png" alt="" width={50} height={50}></Image>
          </button>
        </form>
        <ul>
          {result.map((data: { contentsId: number; personName: string }) => {
            return (
              <li key={data.personName} className="search-result">
                <Link href={`/contents/${data.contentsId}`} onClick={event}>
                  <button className="Link-Button">{data.personName}</button>
                </Link>
              </li>
            );
          })}
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
            max-width: 1000px;
            display: flex;
            width: 100%;
            flex-direction: column;
          }
          li {
            display: inline-block;
          }
          li:first-child .Link-Button {
            border-radius: 10px 10px 0 0;
          }
          li:last-child .Link-Button {
            border-radius: 0 0 10px 10px;
          }
          form {
            align-items: center;
            display: flex;
            height: 90px;
          }
          .Link-Button {
            height: 40px;
            width: 100%;
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

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Notice() {
  const router = useRouter();
  const [notice, setNotice] = useState<{
    id: number;
    title: string;
    writer: string;
    contents: string;
  }>({ id: 0, title: "", writer: "", contents: "" });
  useEffect(() => {
    if (router.query.id) {
      (async () => {
        const { data: notice } = await axios.get(
          `/api/notice/${router.query.id}`
        );
        setNotice(notice);
      })();
    }
  }, [router.isReady, router.query]);
  return (
    <>
      <h1>
        <span>{notice.title}</span>
        <span className="writer">
          <span>작성자: </span>
          <span>{notice.writer}</span>
        </span>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: notice.contents }}></div>
      <style jsx>
        {`
          h1 {
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            font-size: 40px;
          }
          .writer {
            font-size: 16px;
            font-weight: lighter;
          }
        `}
      </style>
    </>
  );
}

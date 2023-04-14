export default function FunctionButton({
  event,
  text,
  mod,
  title,
}: {
  event: () => void;
  text: string;
  mod: "button" | "submit";
  title?: string;
}) {
  return (
    <>
      <button type={mod} onClick={event} title={title}>
        {text}
      </button>
      <style jsx>
        {`
          button {
            height: 40px;
            cursor: pointer;
            background-color: rgb(0, 0, 0, 0);
            border: 1px solid white;
            width: 40px;
          }
        `}
      </style>
    </>
  );
}
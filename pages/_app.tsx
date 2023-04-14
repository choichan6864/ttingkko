import NavBar from "@/components/navBar";
import "../styles/global.css";
import { useRouter } from "next/router";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <main>
        {router.pathname !== "/" ? (
          <section>
            <Component {...pageProps} />
          </section>
        ) : (
          <Component {...pageProps} />
        )}
        <style jsx>
          {`
            main {
              width: 100%;
            }
            section {
              max-width: 1000px;
              padding: 48px 3rem 3rem 3rem;
              background-color: rgb(0, 0, 125);
              min-height: 100vh;
              margin: auto;
            }
          `}
        </style>
      </main>
    </>
  );
}

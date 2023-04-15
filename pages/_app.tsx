import NavBar from "@/components/navBar";
import "../styles/global.css";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Provider store={store}>
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
              min-height:100vh;
              background-color: rgb(80, 80, 80);
            }
            section {
              max-width: 1000px;
              padding: 48px 3rem 3rem 3rem;
              min-height: 100vh;
              margin: auto;
            }
          `}
        </style>
      </main>
    </Provider>
  );
}

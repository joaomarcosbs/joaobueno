import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>João Bueno - Portfólio</title>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        />
        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="HandheldFriendly"
          content="true"
        />
        <meta
          name="author"
          content="João Bueno"
        />
        <meta
          name="description"
          content="Sou do Rio Grande do Sul, Brasil. Desenvolvedor JavaScript, usando React.JS, React Native, Next.JS, WordPress, desenvolvendo apps para iOS, Android e Web."
        />
        <meta
          property="og:type"
          content="company"
        />
        <meta
          property="og:url"
          content="https://joaozinho.dev.br"
        />
        <meta
          property="og:title"
          content="João Bueno - Portfólio"
        />
        {/* <meta
          property="og:image"
          content="https://www.orni.com.br/assets/img/og.png"
        /> */}
        <meta
          property="og:site_name"
          content="João Bueno - Portfólio"
        />
        <meta
          property="og:description"
          content="Desenvolvedor JavaScript, usando React.JS, React Native, Next.JS, WordPress, desenvolvendo apps para iOS, Android e Web. Sou do Rio Grande do Sul, Brasil."
        />
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&display=swap"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto"
          type="text/css"
          media="all"
        />
        <meta
          name="twitter:card"
          content="summary"
        />
        <meta
          name="twitter:url"
          content="https://joaozinho.dev.com.br"
        />
        <meta
          name="twitter:image"
          content="https://joaozinho.dev.br/assets/images/me.JPG"
        />
        <meta
          name="twitter:site"
          content="@TheLabaxurias"
        />
        <meta
          name="twitter:title"
          content="João Bueno - Desenvolvedor de Software"
        />
        <meta
          name="twitter:creator"
          content="@TheLabaxurias"
        />
        <meta
          name="twitter:description"
          content="Desenvolvedor JavaScript, usando React.JS, React Native, Next.JS, WordPress, desenvolvendo apps para iOS, Android e Web. Sou do Rio Grande do Sul, Brasil."
        />
        {/* CSS STYLES */}
        <link
          rel="stylesheet"
          href="assets/css/vendors/bootstrap.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/font-awesome/css/font-awesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/magnific-popup.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/splitting.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/swiper.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/animate.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/dark.css"
          type="text/css"
          media="all"
        />
        {/* Favicon */}
        <link
          rel="shortcut icon"
          href="fav.png"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="fav.png"
          type="image/x-icon"
        />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;

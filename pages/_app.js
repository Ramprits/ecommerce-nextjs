import Layout from "../components/_App/Layout";
import "../styles/globals.css";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/nprogress.css" />
        <body>
          <Main />
          <NextScript />
          <script src="js/bootstrap/bootstrap.bundle.min.js"></script>
          <script src="js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

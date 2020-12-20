import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import HeadContent from "./HeadContent";
import Header from "./Header";
import SideNav from "./SideNav";

export default function Layout({ children }) {
  const router = useRouter();
  const [toggle, setToggle] = useState(true);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Head>
        <HeadContent />
        <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" />
        <script src="js/bootstrap/bootstrap.bundle.min.js"></script>
        <script src="js/main.js"></script>
        <title>React Reserve</title>
      </Head>
      <div
        className={`${
          router.pathname !== "/login" && router.pathname !== "/register"
            ? "container pb-5"
            : ""
        }`}
      >
        {router.pathname !== "/login" && router.pathname !== "/register" && (
          <Header handleToggleClick={onToggle} />
        )}
        <main>{children}</main>
      </div>
      <SideNav toggle={toggle} handleToggleClick={onToggle} />
    </>
  );
}

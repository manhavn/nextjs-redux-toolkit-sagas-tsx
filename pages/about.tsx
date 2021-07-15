import ActiveLink from "../root/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {set_pathname} from "../root/commonSlice";

function About() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(set_pathname("/about"))
  }, [dispatch])

  return <>
    <Head>
      <title>About</title>
      <meta name="About" content="About"/>
    </Head>

    <main className={styles.main}>
      This is about
      <br/>
      <br/>
      <ActiveLink href={"/"}>
        <button>home</button>
      </ActiveLink>
      <br/>
      <ActiveLink href={"/blog"}>
        <button>/blog</button>
      </ActiveLink>
      <br/>
      <ActiveLink href={"/blog/categories"}>
        <button>/blog/categories</button>
      </ActiveLink>
      <br/>
      <ActiveLink href={"/blog/category/1234"}>
        <button>/blog/category/1234</button>
      </ActiveLink>
      <br/>
      <ActiveLink href={"/blog/post/5678"}>
        <button>/blog/post/5678</button>
      </ActiveLink>
    </main>
  </>
}

export default About

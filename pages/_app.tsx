import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import store from "../root/store";
import Footer from "../root/components/footer";
import Header from "../root/components/header";
import styles from "../styles/Home.module.css";

function MyApp({Component, pageProps}: AppProps) {
  return <Provider store={store}>
    <div className={styles.container}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  </Provider>
}

export default MyApp

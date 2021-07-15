import styles from "../../styles/Home.module.css";
import Image from "next/image";
import {useRouter} from "next/router";

function Footer() {
  const router = useRouter()
  return <footer className={styles.footer}>
    <div style={{cursor: "pointer"}} onClick={() => {
      router.push("/").then()
    }}>
      Powered by{' '}
      <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
    </div>
  </footer>
}

export default Footer

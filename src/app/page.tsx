import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        className={styles.pageContent}
        style={{
          fontSize: "larger",
          color: "blueviolet",
          fontWeight: "bolder",
        }}
      >
        This is the home page
      </div>
    </main>
  );
}

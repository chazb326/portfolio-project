import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import headshot from "../../public/headshot.jpg";
import clsx from "clsx";

export default function Home() {
  const sections = clsx(styles.section, styles.columnBox);

  return (
    <main className={styles.main}>
      <div
        className={styles.pageContent}
        style={{
          fontWeight: "bolder",
        }}
      >
        <div className={styles.rowBox}>
          <Image
            className={styles.headshot}
            src={headshot}
            alt="Charlie Burian"
          />
          <section className={sections}>
            <h2 className={styles.header}>Who am I?</h2>
            <p>
              I am a junior software engineer working at Galileo-Insights and
              PanOptic Automation, based out of Royal Oak MI. I am currently
              living in the Austin, MN area!{" "}
            </p>
            <p>
              I have been in this role since the Spring of 2022, after I
              graduated from Western Michigan University with my B.A. in
              Industrial Engineering.
            </p>
            <p>
              To learn more about me, check out the{" "}
              <span>
                <Link
                  prefetch={true}
                  href={"/contact"}
                  className={styles.link}
                  style={{ fontSize: "large" }}
                >
                  Contact
                </Link>
              </span>{" "}
              page on this site - to learn more about what I&apos;m working on,
              check out the{" "}
              <span>
                <Link
                  prefetch={true}
                  href={"/work"}
                  className={styles.link}
                  style={{ fontSize: "large" }}
                >
                  Work
                </Link>
              </span>{" "}
              page on this site. Thanks!
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

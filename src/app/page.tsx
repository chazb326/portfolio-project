"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import headshot from "../../public/headshot.jpg";
import clsx from "clsx";
import useMediaQuery from "./hooks/useMediaQuery";

export default function Home() {
  const sections = clsx(styles.section, styles.columnBox);
  const isDesktop = useMediaQuery("(min-width: 1048px)");

  return (
    <main className={styles.main}>
      <div
        className={styles.pageContent}
        style={{
          fontWeight: "bolder",
          width: isDesktop ? "70%" : "100%",
          top: isDesktop ? "170px" : "140px",
        }}
      >
        {isDesktop ? (
          <section className={sections} style={{ flexDirection: "row" }}>
            <Image
              className={styles.headshot}
              style={{ width: "40%" }}
              src={headshot}
              alt="Charlie Burian"
            />
            <div className={styles.columnBox}>
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
                page on this site - to learn more about what I&apos;m working
                on, check out the{" "}
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
            </div>
          </section>
        ) : (
          <section className={sections}>
            <h2 className={styles.header} style={{ marginBottom: "0px" }}>
              Who am I?
            </h2>
            <Image
              className={styles.headshot}
              style={{ width: "95%" }}
              src={headshot}
              alt="Charlie Burian"
            />
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
              page on this site - to see some react components I&apos;ve built,
              check out the{" "}
              <span>
                <Link
                  prefetch={true}
                  href={"/react-projects"}
                  className={styles.link}
                  style={{ fontSize: "large" }}
                >
                  React Projects
                </Link>
              </span>{" "}
              page on this site. And lastly, this site is mobile friendly, so be
              sure to check that out. Thanks!
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

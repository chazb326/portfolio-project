"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import clsx from "clsx";
import linkedin from "../../../public/linkedin-logo.webp";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Contact() {
  const sections = clsx(styles.section, styles.rowBox);
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  return (
    <main className={styles.main}>
      <div
        className={styles.pageContent}
        style={{
          fontWeight: "bolder",
          top: isDesktop ? "170px" : "140px",
        }}
      >
        <div className={styles.columnBox}>
          <section className={sections} style={{ gap: "0px" }}>
            <Image className={styles.linkedin} src={linkedin} alt="LinkedIn" />
            <div
              className={styles.rowBox}
              style={{
                margin: "0 auto",
              }}
            >
              <h4 className={styles.headerSmall}>
                Check out my LinkedIn Profile{" "}
                <span>
                  <a href="https://www.linkedin.com/in/charles-burian-667a23180/">
                    HERE
                  </a>
                </span>
              </h4>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

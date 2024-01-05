"use client";

import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.navContainer}>
          <h1 style={{ fontSize: "xxx-large" }}>Charlie Burian</h1>
          <ul className={styles.navLinks} style={{ width: "50%" }}>
            <Link
              className={clsx(styles.link, {
                [styles.active]: usePathname() == "/",
              })}
              prefetch={true}
              href={"/"}
            >
              About Me
            </Link>

            <Link
              className={clsx(styles.link, {
                [styles.active]: usePathname() == "/work",
              })}
              prefetch={true}
              href={"/work"}
            >
              Work
            </Link>

            <Link
              className={clsx(styles.link, {
                [styles.active]: usePathname() == "/contact",
              })}
              prefetch={true}
              href={"/contact"}
            >
              Contact
            </Link>
          </ul>
        </header>
        {children}
      </body>
    </html>
  );
}

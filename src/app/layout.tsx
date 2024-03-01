/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";
import { MobileNavButton } from "./components/MobileNavButton";
import { ClearDialogButton } from "./components/ClearDialogButton";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 1048px)");
  const [menuActive, setMenuActive] = useState(false);

  // useEffect(() => {
  //   console.log(`menuActive: ${menuActive}`);
  // }, [menuActive]);

  const navClick = () => {
    setMenuActive(false);
  };

  return (
    <html lang="en">
      <body style={{ backgroundColor: "rgba(145, 129, 81, 0.5)" }}>
        <header>
          {isDesktop ? (
            <div className={styles.navContainer}>
              <h1 style={{ fontSize: "xxx-large" }}>Charlie Burian</h1>
              <ul className={styles.navLinks} style={{ width: "50%" }}>
                <Link
                  className={clsx(styles.link, {
                    [styles.active]: usePathname() == "/",
                  })}
                  onClick={navClick}
                  prefetch={true}
                  href={"/"}
                >
                  About Me
                </Link>

                <Link
                  className={clsx(styles.link, {
                    [styles.active]: usePathname() == "/work",
                  })}
                  onClick={navClick}
                  prefetch={true}
                  href={"/work"}
                >
                  Work
                </Link>

                <Link
                  className={clsx(styles.link, {
                    [styles.active]: usePathname() == "/contact",
                  })}
                  onClick={navClick}
                  prefetch={true}
                  href={"/contact"}
                >
                  Contact
                </Link>
                <Link
                  className={clsx(styles.link, {
                    [styles.active]: usePathname() == "/react-projects",
                  })}
                  onClick={navClick}
                  prefetch={true}
                  href={"/react-projects"}
                >
                  React Projects
                </Link>
              </ul>
            </div>
          ) : (
            <>
              <div
                className={clsx(styles.mobileNavMenu, {
                  [styles.mobileNavMenuActive]: menuActive,
                })}
              >
                <ClearDialogButton setState={setMenuActive} />
                <ul className={styles.mobileNavLinks} style={{ width: "70%" }}>
                  <Link
                    className={clsx(styles.link, {
                      [styles.active]: usePathname() == "/",
                    })}
                    onClick={navClick}
                    prefetch={true}
                    href={"/"}
                  >
                    About Me
                  </Link>

                  <Link
                    className={clsx(styles.link, {
                      [styles.active]: usePathname() == "/work",
                    })}
                    onClick={navClick}
                    prefetch={true}
                    href={"/work"}
                  >
                    Work
                  </Link>

                  <Link
                    className={clsx(styles.link, {
                      [styles.active]: usePathname() == "/contact",
                    })}
                    onClick={navClick}
                    prefetch={true}
                    href={"/contact"}
                  >
                    Contact
                  </Link>
                  <Link
                    className={clsx(styles.link, {
                      [styles.active]: usePathname() == "/react-tasks",
                    })}
                    onClick={navClick}
                    prefetch={true}
                    href={"/react-tasks"}
                  >
                    React Tasks
                  </Link>
                </ul>
              </div>
              <div className={styles.mobileNavContainer}>
                <h1
                  style={{
                    fontSize: "xxx-large",
                    maxWidth: "70%",
                  }}
                >
                  Charlie Burian
                </h1>
                <MobileNavButton
                  menuActive={menuActive}
                  setMenuActive={setMenuActive}
                />
              </div>
            </>
          )}
        </header>
        {children}
      </body>
    </html>
  );
}

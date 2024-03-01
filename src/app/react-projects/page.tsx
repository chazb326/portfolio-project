"use client";

import Image from "next/image";
import styles from "./page.module.css";
import galileoPanoptic from "../../../public/galileo-panoptic.jpg";
import codecademy from "../../../public/Codecademy.svg";
import cka from "../../../public/cka-course.png";
import clsx from "clsx";
import { Divider } from "../components/Divider";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { RT_Accordian } from "../components/RT_Accordian";

export default function ReactTasks() {
  const isDesktop = useMediaQuery("(min-width: 1048px)");

  return (
    <main className={styles.main}>
      <div
        className={styles.pageContent}
        style={{
          fontWeight: "bolder",
          top: isDesktop ? "170px" : "140px",
        }}
      >
        <RT_Accordian />
      </div>
    </main>
  );
}

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
import { RP_Accordian } from "../components/RP_Accordian";
import { RP_RandomColor } from "../components/RP_RandomColor";
import { RP_StarRating } from "../components/RP_StarRating";
import { RP_ImageSlider } from "../components/RP_ImageSlider";
import { RP_LoadMoreData } from "../components/RP_LoadMoreData";

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
        <RP_Accordian />
        <br />
        <Divider color="black" width={100} />
        <RP_RandomColor />
        <br />
        <Divider color="black" width={100} />
        <RP_StarRating noOfStars={10} />
        <br />
        <Divider color="black" width={100} />
        <RP_ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
        <br />
        <Divider color="black" width={100} />
        <RP_LoadMoreData />
        <br />
        <Divider color="black" width={100} />
        <br />
      </div>
    </main>
  );
}

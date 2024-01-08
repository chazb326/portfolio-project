"use client";

import Image from "next/image";
import styles from "./page.module.css";
import galileoPanoptic from "../../../public/galileo-panoptic.jpg";
import codecademy from "../../../public/Codecademy.svg";
import cka from "../../../public/cka-course.png";
import clsx from "clsx";
import { Divider } from "../components/Divider";
import { useState } from "react";

export default function Work() {
  const sections = clsx(styles.section, styles.columnBox);
  const sectionDrawers = clsx(styles.sectionDrawer, styles.columnBox);
  const [drawerOne, setDrawerOne] = useState(false);
  const [drawerTwo, setDrawerTwo] = useState(false);
  const [drawerThree, setDrawerThree] = useState(false);

  return (
    <main className={styles.main}>
      <div
        className={styles.pageContent}
        style={{
          fontWeight: "bolder",
        }}
      >
        <div className={styles.columnBox}>
          <h2 className={styles.header}>Employment</h2>
          <section className={sections}>
            <Image
              className={styles.work}
              src={galileoPanoptic}
              alt="galileo-panoptic"
            />
            <button
              className={styles.button}
              onClick={() => {
                setDrawerOne(!drawerOne);
                setDrawerTwo(false);
                setDrawerThree(false);
              }}
            >
              {drawerOne ? (
                <span>&#8201;See less &#8743;&#8201;&#8201;</span>
              ) : (
                <span>&#8201;See more &#8744;&#8201;&#8201;</span>
              )}
            </button>
            {drawerOne && (
              <div className={sectionDrawers}>
                <h3>What do I do at Galileo-Insights & PanOptic?</h3>
                <ul className={styles.skillList}>
                  <li>Quality Assurance & Test Automation</li>
                  <li>Platform Engineering, CI/CD, & Site Reliability</li>
                  <li>Frontend Development</li>
                </ul>
                <span></span>
                <p>
                  See the Galileo website{" "}
                  <span>
                    <a
                      href="https://galileo-insights.com/"
                      title="Galileo-Insights Website"
                    >
                      HERE
                    </a>
                  </span>
                </p>
                <p>
                  See the PanOptic website{" "}
                  <span>
                    <a
                      href="https://www.panoptic-qs.com/"
                      title="PanOptic Automation Website"
                    >
                      HERE
                    </a>
                  </span>
                </p>
              </div>
            )}
          </section>
          <h2 className={styles.header} style={{ marginTop: "30px" }}>
            Learning
          </h2>
          <section className={sections}>
            <Image
              className={styles.codecademy}
              src={codecademy}
              alt="Codecademy"
            />
            <button
              className={styles.button}
              onClick={() => {
                setDrawerOne(false);
                setDrawerTwo(!drawerTwo);
                setDrawerThree(false);
              }}
            >
              {drawerTwo ? (
                <span>&#8201;See less &#8743;&#8201;&#8201;</span>
              ) : (
                <span>&#8201;See more &#8744;&#8201;&#8201;</span>
              )}
            </button>
            {drawerTwo && (
              <div className={sectionDrawers}>
                <h3>What am I learning through Codecademy?</h3>
                <p>Full-Stack Engineer career-path. Skills?</p>
                <ul className={styles.list}>
                  <li>Git & Source control</li>
                </ul>
                <p>
                  See the course{" "}
                  <span>
                    <a
                      href="https://www.codecademy.com/career-journey/full-stack-engineer"
                      title="Codecademy Full-Stack Engineer Course"
                    >
                      HERE
                    </a>
                  </span>
                </p>
              </div>
            )}
          </section>
          <section className={sections}>
            <Image className={styles.cka} src={cka} alt="CKA Udemy Course" />
            <button
              className={styles.button}
              onClick={() => {
                setDrawerOne(false);
                setDrawerTwo(false);
                setDrawerThree(!drawerThree);
              }}
            >
              {drawerThree ? (
                <span>&#8201;See less &#8743;&#8201;&#8201;</span>
              ) : (
                <span>&#8201;See more &#8744;&#8201;&#8201;</span>
              )}
            </button>
            {drawerThree && (
              <div className={sectionDrawers}>
                <p>
                  See the course{" "}
                  <span>
                    <a
                      href="https://www.udemy.com/course/certified-kubernetes-administrator-with-practice-tests/"
                      title="Udemy Certified Kubernetes Administrator Course"
                    >
                      HERE
                    </a>
                  </span>
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

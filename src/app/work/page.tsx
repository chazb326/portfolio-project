import Image from "next/image";
import styles from "./page.module.css";
import galileoPanoptic from "../../../public/galileo-panoptic.jpg";
import clsx from "clsx";

export default function Work() {
  const sections = clsx(styles.section, styles.rowBox);
  return (
    <main className={styles.main}>
      <div
        className={styles.pageContent}
        style={{
          fontWeight: "bolder",
        }}
      >
        <h2 className={styles.header}>This is the work page</h2>
        <div className={styles.columnBox}>
          <section className={sections}>
            <div>Employment</div>
            <Image
              className={styles.work}
              src={galileoPanoptic}
              alt="galileo-panoptic"
            />
          </section>
          <section className={sections}>
            <div>Codecademy</div>
          </section>
          <section className={sections}>
            <div>Kubernetes Administrator Certification Course</div>
          </section>
        </div>
      </div>
    </main>
  );
}

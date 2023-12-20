import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <ul className={styles.rowBox}>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </header>
      <div className={styles.columnBox}>
        <h1>Charlie&apos;s App</h1>
        <h2>About Me</h2>
        <h2>Employment</h2>
        <h2>What I&apos;m Working On</h2>
      </div>
    </main>
  )
}

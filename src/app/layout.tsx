import type { Metadata } from 'next'
import './globals.css'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: "Charlie's React App"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.columnBox} style={{zIndex: "100", width: "100vw", height: "100vh", backgroundColor: "lightgray", margin: "0 auto"}}>
          <h1>Under Construction!!</h1>
        </div>
        
        {children}
      </body>
    </html>
  )
}

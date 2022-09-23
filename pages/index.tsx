import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LoadingBarComponent } from 'loading-bar-pro'
import 'loading-bar-pro/dist/index.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo loading bar pro</title>
        <meta name="description" content="Demo loading bar pro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Loading bar</p>
        <LoadingBarComponent time={2000} color="blue" borderRadius={5} width={500} height={20} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} bafousaixz
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}

export default Home


import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Navbar } from '../componentes/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Navbar/>
      <main className={styles.main}>

      <h1>Home Pagee</h1>     

        <h1 className={styles.title}>
       ir al <Link href="/about" >ABOUT</Link> 
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        </main>
    </div>
  )
}

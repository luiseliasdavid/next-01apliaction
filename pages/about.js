import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Navbar } from '../componentes/Navbar';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>     

        <h1>About Page</h1>

        <h1 className={styles.title}>
           ir al <Link href="/" >HOME</Link> 
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>

        </main> 
    </div>
  )
}
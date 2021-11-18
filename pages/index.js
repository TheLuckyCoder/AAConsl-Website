import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from "../compnents/NavBar";
import React from "react";

export default function Home() {
    return (
        <>
            <Head>
                <title>A&A Consult</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className={styles.header}>
                <img src="vercel.svg"/>
                <h1 className={styles.title}>
                    Bine ai venit la <font color="#0070f3">A&A Consult!</font>
                </h1>
            </header>
            <NavBar/>

            <main className={styles.main}>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h2>Documentation &rarr;</h2>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h2>Learn &rarr;</h2>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="http://theluckycoder.net"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Website realizat de&nbsp;<b>Filea Răzvan Gheorghe</b>
                </a>
            </footer>
        </>
    )
}

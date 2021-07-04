import Head from "next/head";
import styles from "../../styles/Home.module.css";

const siteTitle = 'Nextjs Infinite Scroll';

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <main className={styles.main}>
          {children}
      </main>
    </div>
  );
}

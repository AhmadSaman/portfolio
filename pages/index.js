import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ahmad Saman</title>
        <meta name="description" content="Ahmad Saman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Hi This Website is Under Construction</h1>
        <iframe
          src="https://giphy.com/embed/tAeB6dptxnoli"
          width="480"
          height="446"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/construction-tAeB6dptxnoli">
            via GIPHY
          </a>
        </p>

        <div className={styles.dev}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ahmad-saman-513087201/"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ahmadweisi"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ahmadsaman"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/ahmadweisi/"
          >
            Instagram
          </a>
        </div>
      </main>
    </div>
  );
}

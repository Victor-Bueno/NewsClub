import Head from 'next/head';
import { SubscribeBtn } from '../components/SubscribeBtn';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | news.club</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>Coding</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeBtn />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding"/>
      </main>
    </>
  );
}

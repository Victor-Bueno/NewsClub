import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeBtn } from '../components/SubscribeBtn';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home(props: HomeProps) {
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
            <span>for {props.product.amount} month</span>
          </p>
          <SubscribeBtn priceId={props.product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding"/>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JZK4MISatSbNHdgsvi4XTlc');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  };

  return {
    props: { product },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
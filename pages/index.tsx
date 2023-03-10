import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import product1 from '../public/images/product1.jpg';
import product2 from '../public/images/product2.jpg';
import product3 from '../public/images/product3.jpg';
import product4 from '../public/images/product4.jpg';
import { checkout } from '../checkout';


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Buy my phisical NFTs</h1>

        <div className={styles.grid}>
          <a className={styles.card}>
            <Image src={product1} alt="NFT" width={200} height={200} />
            <p>Very expensive art piece 1</p>
            <button onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1MK6Z7KPVkhti9CnqR3CAEzu",
                    quantity: 1,
                  },
                  {
                    price: "price_1MK6a9KPVkhti9CnigCkITcY",
                    quantity: 1,
                  }
                ]
              })
            })}>BUY!</button>
          </a>

          <a className={styles.card}>
            <Image src={product2} alt="NFT" width={200} height={200} />
            <p>Very expensive art piece 2</p>
            <button onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1MK6a9KPVkhti9CnigCkITcY",
                    quantity: 1,
                  }
                ]
              })
            })}>BUY!</button>
          </a>
        </div>
      </main>
    </div>
  )
}

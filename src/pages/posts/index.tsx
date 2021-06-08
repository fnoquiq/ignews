import { Head } from 'next/document'

import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Learna</strong>
            <p>In this guide, you will learn how to create a monorepo to manage multiple packages</p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Learna</strong>
            <p>In this guide, you will learn how to create a monorepo to manage multiple packages</p>
          </a>

          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Learna</strong>
            <p>In this guide, you will learn how to create a monorepo to manage multiple packages</p>
          </a>
        </div>
      </main>
    </>
  )
}
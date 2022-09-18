import { Link } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const LoginPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link
          href={`${process.env.NEXT_PUBLIC_API_HOST}/google?state=${process.env.NEXT_PUBLIC_HOST}`}
        >
          Login
        </Link>
      </main>
    </div>
  )
}

export default LoginPage

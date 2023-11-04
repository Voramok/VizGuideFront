import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Home.module.scss'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

const Home: FC = () => {

    return (
        <Layout title='Home'>
           <h1>Viz Guide</h1>
        </Layout>
    )
}

export default Home
import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const NotFound: NextPage = () => {
    return <Layout>
        <Head>
            <title>Not found</title>
        </Head>
        <div style={{
            textAlign: 'center'
            }}>
            <Image src='/404.jpg' alt='' width={450} height={433} />
        </div>
    </Layout>
}

export default NotFound
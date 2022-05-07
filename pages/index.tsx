import type { NextPage } from 'next'
import Head from 'next/head'

import Landingpage from '../components/landingpage'
import Aboutme from '../components/aboutme'
import Skills from '../components/skills'
import Works from '../components/works'
import Tools from '../components/tools'
import Footer from '../components/footer'
import AboveFooter from '../components/abovefooter'


const Home: NextPage = () => {
    return (
        <div>
            <Head>
          
                <title>PEDEV</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
            </Head>
           
            <Landingpage />
                
        </div>
    )
}

export default Home

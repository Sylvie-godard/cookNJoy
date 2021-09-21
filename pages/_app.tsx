import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type {AppProps} from 'next/app'
import HeadComponent from '../components/Head/Head'
import NavBar from '../components/NavBar/NavBar'
import React from 'react'
import Footer from '../components/Footer/Footer'

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
    return (
        <div>
            <HeadComponent/>
            <div>
                <NavBar/>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </div>
    )
}

export default MyApp

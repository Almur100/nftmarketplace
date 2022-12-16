import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Navbar from '../components/navbar'
import Header from '../components/header'
import Nftcontent from '../components/nftcontent'
import Collection from '../components/collection'
import Seller from '../components/seller'
import Subscribe from '../components/subscribe'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className={styles.main}>
      <div className={styles.main1}>
      
      <Header/>
      <Nftcontent/>
      <Collection/>
      <Seller/>
      <Subscribe/>
      <Footer/>
      </div>
      

    </div>
    </>
    
  )
}

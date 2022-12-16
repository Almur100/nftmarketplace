import Image from "next/image"
import styles from "../styles/footer.module.css"
import {IoLogoXbox } from "react-icons/io";
import {MdCopyright } from "react-icons/md";
import {BsTwitter } from "react-icons/bs";
import {BsFacebook } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";
import {FaLinkedin } from "react-icons/fa";


export default function Footer(){
    return(
        <>
        <div className={styles.footer}>
            <div className={styles.footerdiv}>
                <div className={styles.left}>
                    <div className={styles.lefttop}>
                        <div>
                            <IoLogoXbox/>
                        </div>
                        <div>
                            DEGITAL AGENCY
                        </div>

                    </div>
                    <div className={styles.leftbottom}>
                        <div>Copyright <MdCopyright/> 2022 ITO</div>
                        <div>Help Center</div>
                        <div>Solana NFTs</div>

                    </div>

                </div>
                <div className={styles.right}>
                    <div className={styles.righttop}>
                        <div>ABOUT</div>
                        <div>MARKET</div>
                        <div>WALLET</div>
                        <div>ART</div>
                        

                    </div>
                    <div className={styles.rightbottom}>
                        <div><BsTwitter/></div>
                        <div><BsFacebook/></div>
                        <div><BsInstagram/></div>
                        <div><FaLinkedin/></div>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}
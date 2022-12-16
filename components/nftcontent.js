import Image from "next/image"
import styles from "../styles/nftcontent.module.css"
import { IoIosArrowForward } from "react-icons/io";
import Nftcollection from "./nftcollection";

export default function Nftcontent() {
    return (
        <>
            <div className={styles.nftdiv}>
                <div className={styles.nftdiv1}>EXPLORE<br />
                    OUR MARKETPLACE
                </div>
                <div className={styles.nftdiv2}>
                    In support of our sustainability agenda, a portion of our profits will
                    be donated to a foundation <br /> choosen by you:our community.

                </div>
                <div className={styles.nftdiv3}>
                    <div>ALL</div>
                    <div>ABSTRACT</div>
                    <div>MEME</div>
                    <div>GAMES</div>
                    <div>MUSIC</div>
                    <div>3D ART</div>
                    <div>VIRTUAL WORLD</div>
                    <div>MORE
                        <span><IoIosArrowForward /></span>
                        <span><IoIosArrowForward /></span>
                    </div>

                </div>
                <div className={styles.nftdiv4}>
                    {Nftcollection.map((item)=>
                    <div key={item.id} className={styles.headerbottomleft}>
                        <div  className={styles.leftcon1}>
                            <div className={styles.con1div1}>
                                <div><Image src="/profile1.jpg" alt="img" width={30} height={30} className={styles.img} /></div>
                                <div><Image src="/profile2.jpg" alt="img" width={30} height={30} className={styles.img} /></div>
                                <div><Image src="/profile3.jpg" alt="img" width={30} height={30} className={styles.img} /></div>
                                <div><Image src="/profile4.jpg" alt="img" width={30} height={30} className={styles.img} /></div>

                            </div>
                            <div className={styles.con1div2}>
                                <p>Remaining time</p>
                                <p>{item.time}</p>

                            </div>

                        </div>
                        <div className={styles.leftcon2}>
                            <Image src={item.Image} alt='img' width={100} height={100} className={styles.imgnft} />

                        </div>
                        <div className={styles.leftcon3}>
                            <div className={styles.leftcon3div1}>
                                <p>Current price</p>
                                <div className={styles.eth}>
                                    <p>{item.price}</p>
                                    <p>{item.usd}</p>
                                </div>

                            </div>
                            <div className={styles.leftcon3div2}>
                                BID NOW

                            </div>

                        </div>
                       

                    </div>
                    )}

                </div>
            </div>
        </>
    )
}
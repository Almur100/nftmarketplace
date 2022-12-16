import Image from "next/image"
import styles from "../styles/header.module.css"
import { MdPreview } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";


export default function Header() {
    return (
        <>
            <div>
                <div className={styles.headercontent}>
                    <div className={styles.headertop}>
                        <div className={styles.headertop1}>
                            <p>$189M</p>
                            <p>Total Valuation</p>

                        </div>
                        <div className={styles.headertop2}>
                            <p>902k</p>
                            <p>NFTs Created</p>


                        </div>
                        <div className={styles.headertop3}>
                            <p>1.9M</p>
                            <p>Total User</p>


                        </div>

                    </div>
                </div>
                <div className={styles.headerbottom}>
                    <div className={styles.headerbottomleft}>
                        <div className={styles.leftcon1}>
                            <div className={styles.con1div1}>
                                <div><Image src="/profile1.jpg" alt="img" width={30} height={30} className={styles.img} /></div>
                                <div><Image src="/profile2.jpg" alt="img" width={30} height={30}  className={styles.img} /></div>
                                <div><Image src="/profile3.jpg" alt="img" width={30} height={30}   className={styles.img}/></div>
                                <div><Image src="/profile4.jpg" alt="img" width={30} height={30}  className={styles.img}/></div>

                            </div>
                            <div className={styles.con1div2}>
                                <p>Remaining time</p>
                                <p>12H:23M:02S</p>

                            </div>

                        </div>
                        <div className={styles.leftcon2}>
                        <Image src="/nft1.png" alt="img" width={100 } height={100} className={styles.imgnft} />

                        </div>
                        <div className={styles.leftcon3}>
                            <div className={styles.leftcon3div1}>
                                <p>Current price</p>
                                <div className={styles.eth}>
                                <p>0.35 ETH</p>
                                <p>$451.22</p>
                                </div>

                            </div>
                            <div className={styles.leftcon3div2}>
                                BID NOW

                            </div>

                        </div>

                    </div>
                    <div className={styles.headerbottomright}>
                        <div className={styles.bottomdiv1}>
                            November 12,2022 at 11.30am

                        </div>
                        <div className={styles.bottomdiv2}>
                            RARE APE YATCH <br/> CLUB #2265


                        </div>
                        <div className={styles.bottomdiv3}>
                            OWNED BY <span>ALMUR HASAN</span>

                        </div>
                        <div className={styles.bottomdiv4}>
                            Owning a second skin allows you to participate in a token <br/> gated 
                            experience,access exclusive luxury collaboration nft <br/> drops,
                            see your second skin in virtual worlds,plus much more to <br/> discover
                            in the near future.  

                        </div>
                        <div className={styles.bottomdiv5}>
                            <div className={styles.div5left}>
                                <div><MdPreview/></div>
                                <div className={styles.view}>38 views</div>

                            </div>
                            <div className={styles.div5right}>
                                <div><MdFavoriteBorder/></div>
                                <div className={styles.fav}>3 favorites</div>

                            </div>

                        </div>
                        <div className={styles.bottomdiv6}>
                            VIEW ARTWORK

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
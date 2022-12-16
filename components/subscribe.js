import Image from "next/image"
import styles from "../styles/subscribe.module.css"

export default function Subscribe(){
    return(
        <>
        <div className={styles.subdiv}>
            <div className={styles.bigdiv}>
                <div className={styles.smalldiv}>
                    <div className={styles.div1}>
                        SUBSCRIBE TO <br/>
                        GET NFTS

                    </div>
                    <div className={styles.div2}>
                        <div className={styles.left}>
                            <input type="text" placeholder="Enter your email"/>

                        </div>
                        <div className={styles.right}>
                            Send

                        </div>

                    </div>

                </div>

            </div>

        </div>
        </>
    )
}
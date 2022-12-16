import Image from "next/image"
import styles from "../styles/collection.module.css"
import Topcollection from "./topcollection"

export default function Collection(){
    return(

        <>
        <div className={styles.collectdiv}>
            <div className={styles.divtop}>
                <div className={styles.topleft}>
                    TOP COLLECTION

                </div>
                <div className={styles.topright}> 
                EXPLORE MORE

                </div>

            </div>
            <div className={styles.divbottom}>
                {Topcollection.map((item)=>
                <div key={item.id} className={styles.bottomcon}>
                    <div className={styles.con1}>
                    <Image src={item.Image} alt='img' width={100} height={100} className={styles.imgnft} />

                    </div>
                    <div className={styles.con2}>
                        {item.name}

                    </div>
                    <div className={styles.con3}>
                        Owned by <span>{item.owner}</span>

                    </div>

                </div>
                )}

            </div>

        </div>
        </>
    )
}
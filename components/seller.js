import Image from "next/image"
import styles from "../styles/seller.module.css"
import Topseller from "./topseller"

export default function Seller() {
    return (

        <>
            <div className={styles.collectdiv}>
                <div className={styles.divtop}>
                    <div className={styles.topleft}>
                        TOP SELLER

                    </div>
                    <div className={styles.topright}>
                        EXPLORE MORE

                    </div>

                </div>
                <div className={styles.divbottom}>
                    {Topseller.map((item) =>
                        <div key={item.id} className={styles.bottomcon}>
                            <div className={styles.con1}>
                                <Image src={item.Image} alt='img' width={50} height={50} className={styles.imgnft} />

                            </div>
                            <div className={styles.con2}>
                                <div>
                                    {item.name}

                                </div>
                                <div>
                                    {item.price}
                                </div>

                            </div>

                        </div>
                    )}

                </div>

            </div>
        </>
    )
}
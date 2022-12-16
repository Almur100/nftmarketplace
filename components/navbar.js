import Image from "next/image"
import styles from "../styles/navbar.module.css"


export default function Navbar(){
    return(
        <>
        <div className={styles.navbar}>
            <div className={styles.navcontent}>
                <p><Image src="/star.png" alt="img" width={20} height={20}/></p>
                <p>GAMES</p>
                <p><Image src="/star.png" alt="img" width={20} height={20}/></p>
                <p>SPORTS</p>
                <p><Image src="/star.png" alt="img" width={20} height={20}/></p>
                <p>VIRTUAL WORLD</p>
                <p><Image src="/star.png" alt="img" width={20} height={20}/></p>
                <p>MUSIC</p>
                <p><Image src="/star.png" alt="img" width={20} height={20}/></p>
                <p>UTILITY</p>
                <p><Image src="/star.png" alt="img" width={20} height={20}/></p>
                <p>BUILDING</p>
            </div>
        </div>
        </>
    )
}
import Image from "next/image";
import styles from "./about.module.css";


const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>
                    We create digital ideas that are bigger, bolder, braver and better.
                </h1>
                <p className={styles.desc}>
                    We create digital ideas that are bigger, bolder, braver and better. 
                    We believe in good ideas flexibility and precision.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h2 className={styles.boxNumber}>10 K+</h2>
                        <p className={styles.boxDesc}>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h2 className={styles.boxNumber}>234 K+</h2>
                        <p className={styles.boxDesc}>People reached</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image 
                src="/about.png" alt="" fill/>
            </div>
        </div>
    );
};

export default AboutPage
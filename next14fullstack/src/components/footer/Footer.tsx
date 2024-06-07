import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Futurelog</div>
            <div className={styles.text}>Powered by CrowAI @ 2024</div>
        </div>
    )
}

export default Footer
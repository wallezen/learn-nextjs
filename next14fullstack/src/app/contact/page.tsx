"use client";

import Image from "next/image"
import styles from "./contact.module.css";

const ContactPage = () => {
    console.log("it works in client")

    console
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/contact.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname"></input>
                    <input type="email" placeholder="Email address"></input>
                    <input type="number" placeholder="Phone number"></input>
                    <textarea 
                        name=""
                        id=""
                        placeholder="Message"
                    ></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage
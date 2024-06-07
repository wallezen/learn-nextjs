"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link=>(
                    <NavLink item={link} key={link.path} />
                )))} 
                {session ? (
                    <>
                        {isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}} />)}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )
                }
            </div>
            {/* <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button> */}
            <Image src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} width={30} height={30} className={styles.menuButton} />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.path} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Links
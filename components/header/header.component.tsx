import React from "react"

import styles from "./header.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/kitchen-sink">Kitchen Sink</a>
                    </li>
                    <li>
                        <a href="#">Link</a>
                    </li>
                    <li>
                        <a href="#">Another link</a>
                    </li>
                    <li>
                        <a href="#">Linky McLink Link</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

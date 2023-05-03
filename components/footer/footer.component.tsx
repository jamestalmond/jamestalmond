import Link from "next/link"

import styles from "./footer.module.scss"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<nav>
				<ul>
					<li>
						<Link href="https://www.linkedin.com/in/jamestalmond/">LinkedIn</Link>
					</li>
					<li>
						<Link href="https://twitter.com/VivaLaJam">Twitter</Link>
					</li>
				</ul>
			</nav>
		</footer>
	)
}

import Link from "next/link"

import styles from "./header.module.scss"

export const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About Me</Link>
					</li>
					<li>
						<Link href="/skills-and-experience">Skills & Experience</Link>
					</li>
					<li>
						<Link href="/career-history">Career History</Link>
					</li>
					<li>
						<Link href="#">Contact Me</Link>
					</li>
					<li>
						<Link href="/premier-league-table">Premier League Table</Link>
					</li>
					<li>
						<Link href="/kitchen-sink">Kitchen Sink</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

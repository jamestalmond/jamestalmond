import styles from "../styles/career-history.module.scss"

export const CareerHistory = () => {
	return (
		<>
			<h1>Career History</h1>

			<section className={styles["career-history-item"]}>
				<h2>cinch</h2>
				<p className={styles["career-history-item-subtitle"]}>Lorem ipsum dolor.</p>
				<p>Lorem ipsum dolor.</p>
			</section>

			<section className={styles["career-history-item"]}>
				<h2>Auto Trader</h2>
				<p className={styles["career-history-item-subtitle"]}>
					Auto Trader is the UK and Ireland’s largest digital automotive marketplace. It has tech offices based in
					Manchester and London and employs over c.750 people.
				</p>
				<p>Lorem ipsum dolor.</p>
			</section>

			<section className={styles["career-history-item"]}>
				<h2>AO</h2>
				<p className={styles["career-history-item-subtitle"]}>
					AO is a £1bn t/o FTSE 250 listed business, specialising in the online sale and delivery of electricals. The
					tech department spans 2 sites and is made up of c. 200 people.
				</p>
				<p>Lorem ipsum dolor.</p>
			</section>

			<section className={styles["career-history-item"]}>
				<h2>ekm</h2>
				<p className={styles["career-history-item-subtitle"]}>
					ekm is a CMS platform that allows businesses to create online ecommerce shops using templates, c. 80,000 shops
					created.
				</p>
				<p>
					I started at ekm as an ecommerce executive helping shop owners set up their businesses online as fast as
					possible.
				</p>
				<p>
					During this employment I learned how to develop websites off my own back in my own time. I was promoted to
					design and build the shop templates myself.
				</p>
			</section>
		</>
	)
}

export default CareerHistory

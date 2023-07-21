import styles from "../styles/test-homepage.module.scss"

const TestHomepage = () => {
	return (
		<div className={styles["remove-padding"]}>
			<section className={styles["hero"]}>
				<div>
					<h1 className={styles["hero-title"]}>James Thomas Almond</h1>
					<p className={styles["hero-subtitle"]}>Senior Front End Engineer</p>
				</div>
			</section>

			<section className={styles["add-padding"]}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et praesentium inventore modi explicabo hic
					nulla provident aperiam, ducimus sit ratione eaque iusto quia! Eaque, tenetur consequatur? Id, atque expedita!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et praesentium inventore modi explicabo hic
					nulla provident aperiam, ducimus sit ratione eaque iusto quia! Eaque, tenetur consequatur? Id, atque expedita!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et praesentium inventore modi explicabo hic
					nulla provident aperiam, ducimus sit ratione eaque iusto quia! Eaque, tenetur consequatur? Id, atque expedita!
				</p>
			</section>
		</div>
	)
}

export default TestHomepage

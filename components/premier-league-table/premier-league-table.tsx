import React, { useState, useEffect } from "react"
import cx from "classnames"

import { fetchData } from "../../services/api"

import styles from "./premier-league-table.module.scss"
import utilityStyles from "../../utilities/utilities.module.scss"

interface PremierLeagueData {
	competition
	standings
}

export const PremierLeagueTable = () => {
	const [tableData, setTableData] = useState<PremierLeagueData>({} as PremierLeagueData)

	useEffect(() => {
		fetchData(setTableData)
	}, [])

	console.log(tableData)

	return (
		<>
			<h1 className={styles["premier-league-heading"]}>
				<img
					src="/static/images/premier-league-logo.webp"
					alt={`${tableData.competition?.name} crest.`}
					className={styles["premier-league-logo"]}
				/>
				<span className={utilityStyles["visually-hidden"]}>{tableData.competition?.name} table</span>
			</h1>

			<section className={styles["premier-league-table-wrapper"]}>
				<table className={styles["premier-league-table"]}>
					<thead>
						<tr>
							<th scope="col">
								<span className={utilityStyles["show-below-medium"]}>Pos</span>
								<span className={utilityStyles["show-above-medium"]}>Position</span>
							</th>
							<th scope="col">Club</th>
							<th scope="col">
								<span className={utilityStyles["show-below-medium"]}>Pld</span>
								<span className={utilityStyles["show-above-medium"]}>Played</span>
							</th>
							<th scope="col">
								<span className={utilityStyles["show-below-medium"]}>W</span>
								<span className={utilityStyles["show-above-medium"]}>Won</span>
							</th>
							<th scope="col">
								<span className={utilityStyles["show-below-medium"]}>D</span>
								<span className={utilityStyles["show-above-medium"]}>Drawn</span>
							</th>
							<th scope="col">
								<span className={utilityStyles["show-below-medium"]}>L</span>
								<span className={utilityStyles["show-above-medium"]}>Lost</span>
							</th>
							<th scope="col">
								<span className={utilityStyles["show-below-medium"]}>Pts</span>
								<span className={utilityStyles["show-above-medium"]}>Points</span>
							</th>
							<th scope="col">Form</th>
						</tr>
					</thead>
					<tbody>
						{tableData.standings &&
							tableData.standings[0].table.map((position, index) => {
								const tablePosition = position.position
								const teamName = position.team.name.replace(" FC", "")
								const gameForm = position.form.split(",").reverse()

								return (
									<tr key={`${position.team.id}`}>
										<td key={`${position.team.id}-${index}`}>{tablePosition}</td>
										<td key={`${position.team.id}`}>
											<div className={styles["team"]}>
												<img src={position.team.crest} alt={`${teamName} crest.`} className={styles["team-crest"]} />

												<span className={utilityStyles["show-below-medium"]}>{position.team.tla}</span>
												<span className={utilityStyles["show-above-medium"]}>{teamName}</span>
											</div>
										</td>
										<td key={`${position.team.id}-${position.playedGames}-playedGames`}>{position.playedGames}</td>
										<td key={`${position.team.id}-${position.won}-won`}>{position.won}</td>
										<td key={`${position.team.id}-${position.draw}-draw`}>{position.draw}</td>
										<td key={`${position.team.id}-${position.lost}-lost`}>{position.lost}</td>
										<td key={`${position.team.id}-${position.points}-points`}>{position.points}</td>
										<td key={`${position.team.id}-${position.form}-form`}>
											<div className={styles["game-result"]}>
												{gameForm.map((gameResult, index) => {
													const gameResultPillClassName = `game-result-pill-${gameResult}`.toLowerCase()

													return (
														<div
															className={cx(styles["game-result-pill"], styles[gameResultPillClassName])}
															key={`${gameResult}-${index}`}
														>
															{gameResult}
														</div>
													)
												})}
											</div>
										</td>
									</tr>
								)
							})}
					</tbody>
				</table>
			</section>
		</>
	)
}

export default PremierLeagueTable

import React, { useState, useEffect } from "react"
import { useMediaQuery } from "react-responsive"
import cx from "classnames"

import { fetchData } from "../../services/api"

import styles from "./premier-league-table.module.scss"
import utilityStyles from "../../utilities/utilities.module.scss"

interface PremierLeagueData {
	competition
	standings
}

export const PremierLeagueTable = () => {
	const [data, setData] = useState<PremierLeagueData>({} as PremierLeagueData)

	const isMediumOrAbove = useMediaQuery({
		query: "(min-width: 600px)",
	})
	const isLargeOrAbove = useMediaQuery({
		query: "(min-width: 1100px)",
	})

	useEffect(() => {
		fetchData(setData)
	}, [])

	console.log(data)

	return (
		<>
			<h1 className={styles["premier-league-heading"]}>
				<img
					src="/static/images/premier-league-logo.webp"
					alt={`${data.competition?.name} crest.`}
					className={styles["premier-league-logo"]}
				/>
				<span className={utilityStyles["visually-hidden"]}>{data.competition?.name} table</span>
			</h1>

			<section className={styles["premier-league-table-wrapper"]}>
				<table className={styles["premier-league-table"]}>
					<thead>
						<tr>
							<th scope="col">{isMediumOrAbove ? "Position" : "Pos"}</th>
							<th scope="col">Club</th>
							<th scope="col">{isMediumOrAbove ? "Played" : "Pld"}</th>
							<th scope="col">{isMediumOrAbove ? "Won" : "W"}</th>
							<th scope="col">{isMediumOrAbove ? "Drawn" : "D"}</th>
							<th scope="col">{isMediumOrAbove ? "Lost" : "L"}</th>
							<th scope="col">{isMediumOrAbove ? "Points" : "Pts"}</th>
							<th scope="col">Form</th>
						</tr>
					</thead>
					<tbody>
						{data.standings &&
							data.standings[0].table.map((position, index) => {
								const tablePosition = position.position
								const teamName = position.team.name.replace(" FC", "")
								const gameForm = position.form.split(",").reverse()

								return (
									<tr key={`${position.team.id}`}>
										<td key={`${position.team.id}-${index}`}>{tablePosition}</td>
										<td key={`${position.team.id}`}>
											<div className={styles["team"]}>
												<img src={position.team.crest} alt={`${teamName} crest.`} className={styles["team-crest"]} />
												{isLargeOrAbove ? teamName : position.team.tla}
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

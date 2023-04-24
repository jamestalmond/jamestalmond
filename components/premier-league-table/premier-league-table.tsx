import React, { useState, useEffect } from "react"
import cx from "classnames"

import { fetchData } from "../../services/api"

import styles from "./premier-league-table.module.scss"

interface PremierLeagueData {
	competition: {
		name: string
	}
	standings: [
		{
			table
		}
	]
}

export const PremierLeagueTable = () => {
	const [data, setData] = useState<PremierLeagueData>({} as PremierLeagueData)

	useEffect(() => {
		fetchData(setData)
	}, [])

	console.clear()
	console.log(data)

	return (
		<>
			<h1>{data?.competition?.name} table</h1>

			<section className={styles["premier-league-table-wrapper"]}>
				<table className={styles["premier-league-table"]}>
					<thead>
						<tr>
							<th scope="col">Position</th>
							<th scope="col">Team</th>
							<th scope="col">Played</th>
							<th scope="col">Points</th>
							<th scope="col">Won</th>
							<th scope="col">Drawn</th>
							<th scope="col">Lost</th>
							<th scope="col">Form</th>
						</tr>
					</thead>
					<tbody>
						{data?.standings &&
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
												{teamName}
											</div>
										</td>
										<td key={`${position.team.id}-${position.playedGames}-playedGames`}>{position.playedGames}</td>
										<td key={`${position.team.id}-${position.points}-points`}>{position.points}</td>
										<td key={`${position.team.id}-${position.won}-won`}>{position.won}</td>
										<td key={`${position.team.id}-${position.draw}-draw`}>{position.draw}</td>
										<td key={`${position.team.id}-${position.lost}-lost`}>{position.lost}</td>
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

import React, { useState, useEffect } from "react"

import { fetchData } from "../services/api"

import styles from "../styles/premier-league-table.module.scss"

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

const PremierLeagueTable = () => {
	const [data, setData] = useState<PremierLeagueData>({} as PremierLeagueData)

	useEffect(() => {
		fetchData(setData)
	}, [])

	console.clear()
	console.log(data)

	return (
		<>
			<h1>{data?.competition?.name} table</h1>

			{/* TODO: styles not working? */}
			<table className={styles["premier-league-table"]}>
				<thead>
					<tr>
						<th scope="col">Team</th>
						<th scope="col">Points</th>
						<th scope="col">Won</th>
						<th scope="col">Drawn</th>
						<th scope="col">Lost</th>
					</tr>
				</thead>
				<tbody>
					{data?.standings &&
						data.standings[0].table.map((position, index) => {
							return (
								<tr key={`${position.team.id}`}>
									<td key={`${position.team.shortName}`}>{position.team.shortName}</td>
									<td key={`${position.team.shortName}-${position.points}-points`}>{position.points}</td>
									<td key={`${position.team.shortName}-${position.won}-won`}>{position.won}</td>
									<td key={`${position.team.shortName}-${position.draw}-draw`}>{position.draw}</td>
									<td key={`${position.team.shortName}-${position.lost}-lost`}>{position.lost}</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</>
	)
}

export default PremierLeagueTable

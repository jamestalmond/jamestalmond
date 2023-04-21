import React, { useState, useEffect } from "react"

import { API_URL, API_TOKEN } from "../api"

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

	const fetchData = () => {
		return fetch(API_URL, {
			headers: {
				"X-AUTH-TOKEN": API_TOKEN,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data)
			})
			.catch((error) => {
				console.log(error.message)
			})
	}

	useEffect(() => {
		fetchData()
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

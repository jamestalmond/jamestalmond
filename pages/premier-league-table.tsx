import React, { useState, useEffect } from "react"

import { API_URL, API_TOKEN } from "../api"

import styles from "../styles/premier-league-table.module.scss"

const PremierLeagueTable = () => {
	const [data, setData] = useState([])

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
			<table className={styles.premierLeagueTable}>
				<thead>
					<tr>
						<th scope="col">Team</th>
						<th scope="col">Points</th>
						<th scope="col">Won</th>
						<th scope="col">Drawn</th>
						<th scope="col">Lost</th>
					</tr>
				</thead>
				{data?.standings &&
					data.standings[0].table.map((position) => {
						return (
							<tr>
								<td key={`${position.team.shortName}-${position.team.id}`}>{position.team.shortName}</td>
								<td key={`${position.points}-${position.team.id}`}>{position.points}</td>
								<td key={`${position.won}-${position.team.id}`}>{position.won}</td>
								<td key={`${position.draw}-${position.team.id}`}>{position.draw}</td>
								<td key={`${position.lost}-${position.team.id}`}>{position.lost}</td>
							</tr>
						)
					})}
			</table>
		</>
	)
}

export default PremierLeagueTable

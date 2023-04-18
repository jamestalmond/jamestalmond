import React, { useState, useEffect } from "react"

import { API_TOKEN } from "../api-key"

const FetchTest = () => {
	const [data, setData] = useState([])

	const fetchData = () => {
		return fetch("https://api.football-data.org/v4/competitions/PL", {
			headers: {
				"X-AUTH-TOKEN": API_TOKEN,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				setData(data)
			})
			.catch((err) => {
				console.log(err.message)
			})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			<h1>This is a page to test using the Fetch API!</h1>
			<p>{data.code}</p>
		</>
	)
}

export default FetchTest

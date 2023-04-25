import { API_TOKEN } from "./api-token"

const API_URL = "https://api.football-data.org/v4/competitions/2021/standings"

export const fetchData = (setTableData) => {
    return fetch(API_URL, {
        headers: {
            "X-AUTH-TOKEN": API_TOKEN,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            setTableData(data)
        })
        .catch((error) => {
            console.log(error.message)
        })
}
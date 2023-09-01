import "./styles.css";
import Instructions from "./instructions/Instructions";
import axios from "axios";
import { useEffect, useState } from "react";
import User from "./components/User";

export default function App() {
	const [user, setUser] = useState([]);
	const abort = new AbortController();

	async function fetchUsers() {
		try {
			const users = await axios.get(
				"https://randomuser.me/api/?results=10",
				{
					signal: abort.signal,
				}
			);
			if (users.status === 200) {
				const usrData = users.data;
				setUser(usrData.results);
			} else {
				abort.abort();
				console.log(`Error-code: ${users.status}`);
			}
		} catch (err) {
			abort.abort();
			console.log("Error fetching data:", err);
		}
	}

	useEffect(() => {
		fetchUsers();
	}, []);

	useEffect(() => {
		return () => {
			abort.abort();
		};
	}, []);

	return (
		<div className="App">
			<Instructions />
			<div className="block">
				{user.length > 0
					? user.map((user, key) => <User user={user} key={key} />)
					: "Loading..."}
			</div>
		</div>
	);
}

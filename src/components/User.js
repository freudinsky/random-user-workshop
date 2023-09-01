import { useEffect } from "react";
import Contact from "./Contact";

const User = ({user}) => {

	return (
		<div className="userProfile">
			<img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
			<div>
				<p>Name: {user.name.title} {user.name.first} {user.name.last} </p>
				<p>Age: {user.dob.age} </p>
				<Contact user={user}/>
			</div>
		</div>
	);
};

export default User;

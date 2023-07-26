import { Link } from "react-router-dom";

function Nav() {
	return (
		<>
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/chat"}>Chat</Link>
				</li>
			</ul>
		</>
	);
}

export default Nav;

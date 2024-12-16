import { Link } from "react-router-dom";

const Trash = () => {
	return (
		<div className="flex justify-center flex-col align-middle">
			<h1>GET OUT!</h1>
			<Link to="/" className="btn btn-primary"> Hello</Link>
		</div>
	)
}

export default Trash;
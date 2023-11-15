import React from "react"


const Seconds = (props) => {
	return (
		<div className="m-2 bg-dark p-2 rounded-2">
			<p className="m-0">{props.second}</p>
		</div>
	)
}
export default Seconds;
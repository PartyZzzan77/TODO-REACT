import React from "react";

function ToDoItem(props) {
	const completedStyle = {
		fontStyle: "italic",
		color: "#cdcdcd",
		textDecoration: "line-through"
	}
	return (
		<div className="todo-item">
			<input type='checkbox' checked={props.fields.completed} onChange={() => props.handleChange(props.fields.id)} />
			<p style={props.fields.completed ? completedStyle:null}>Task: {props.fields.text}</p>
		</div >
	)
}
export default ToDoItem;
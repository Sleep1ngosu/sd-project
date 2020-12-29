import React from 'react'
import './Button.scss'

const Button = (props) => {
	return (
		<button
			style={props.style}
			onClick={props.onClick}
			className="newProduct__field__button"
			type={props.type}
		>
			{props.text}
		</button>
	)
}

export default Button

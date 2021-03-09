import React from 'react'
import './Button.scss'

const Button = (props) => {
	const inputImage =
		(props.buttype === 'image' && (
			<input
				onChange={(e) => props.onChange(e)}
				type="file"
				className="newProduct__field__button__input"
				accept=".jpg, .png, .jpeg"
				id={props.id}
			/>
		)) ||
		null

	return (
		<button
			style={props.style}
			onClick={props.onClick}
			className="newProduct__field__button"
			type={props.type}
		>
			{inputImage}
			{props.text}
		</button>
	)
}

export default Button

import React, { useRef } from 'react'
import './Button.scss'

const Button = (props) => {
	const file = useRef('')

	const inputImage =
		(props.buttype === 'image' && (
			<input
				onChange={() => onChange()}
				type="file"
				className="newProduct__field__button__input"
				accept=".jpg, .png, .jpeg"
				ref={file}
			/>
		)) ||
		null

	const onChange = () => {
		console.log(file.current.files[0])
	}
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

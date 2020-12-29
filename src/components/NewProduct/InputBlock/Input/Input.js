import React from 'react'
import './Input.scss'

const Input = (props) => {
	let style = {
		width: props.width,
	}

	let renderedInput = (
		<input
			className="newProduct__Field__inputBlock__input"
			style={style}
			type={props.type}
			value={props.value}
			maxLength={props.max}
			name={props.name}
			value={props.value}
			onChange={(e) => props.onChange(e)}
		/>
	)

	return renderedInput
}

export default Input

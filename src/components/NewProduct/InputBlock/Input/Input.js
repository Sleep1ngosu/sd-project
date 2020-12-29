import React from 'react'
import './Input.scss'

const Input = (props) => {
	let style = {
		width: props.width,
	}

	let renderedInput

	props.disabled === 'disabled'
		? (renderedInput = (
				<input
					className="newProduct__Field__inputBlock__input"
					style={style}
					type={props.type}
					value={props.value}
					maxLength={props.max}
					name={props.name}
					value={props.value}
					onChange={(e) => props.onChange(e)}
					disabled={props.disabled}
					required={props.required}
				/>
		  ))
		: (renderedInput = (
				<input
					className="newProduct__Field__inputBlock__input"
					style={style}
					type={props.type}
					value={props.value}
					maxLength={props.max}
					name={props.name}
					value={props.value}
					onChange={(e) => props.onChange(e)}
					required={props.required}
				/>
		  ))

	return renderedInput
}

export default Input

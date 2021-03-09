import React from 'react'
import './Input.scss'

export const Input = (props) => {
	return (
		<div className="input__wrapper">
			<div className="label">{props.label}</div>
			<input
				value={props.value}
				name={props.name}
				onChange={(e) => props.onChange(e)}
				type="text"
				className="input"
			/>
		</div>
	)
}

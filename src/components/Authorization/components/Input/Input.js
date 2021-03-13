import React from 'react'
import './Input.scss'

export const Input = (props) => {
	return (
		<div className="input__wrapper">
			<input
				placeholder={props.placeholder}
				value={props.value}
				name={props.name}
				onChange={(e) => props.onChange(e)}
				type="text"
				className="input"
			/>
		</div>
	)
}

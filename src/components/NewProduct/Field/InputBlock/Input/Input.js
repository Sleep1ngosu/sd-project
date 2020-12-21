import React from 'react'
import './Input.scss'

const Input = (props) => {
	return (
		<input
			className="newProduct__Field__inputBlock__input"
			type={props.type}
			value={props.value}
		/>
	)
}

export default Input

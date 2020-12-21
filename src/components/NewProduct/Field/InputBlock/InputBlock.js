import React from 'react'
import './InputBlock.scss'
import Input from './Input/Input'

const InputBlock = (props) => {
	return (
		<div style={props.style} className="newProduct__field__formInput">
			<span className="newProduct__field__formInput__label">
				{props.label}
			</span>
			<Input type={props.type} />
		</div>
	)
}

export default InputBlock

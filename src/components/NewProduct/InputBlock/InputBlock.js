import React from 'react'
import './InputBlock.scss'
import Input from './Input/Input'

/**
 *
 *  props: 	{label, height, widthBlock, inputWidth, max, name, value, onchange, type}
 */

const InputBlock = (props) => {
	let style = {
		width: props.widthBlock,
		height: `${props.heightBlock}rem`,
		marginTop: props.marginTop,
	}

	return (
		<div style={style} className="newProduct__field__formInput">
			<span className="newProduct__field__formInput__label">{props.label}</span>
			<Input
				width={props.inputWidth}
				max={props.max}
				type={props.type}
				name={props.name}
				value={props.value}
				onChange={(e) => props.onChange(e)}
				disabled={props.disabled}
				required={props.required}
			/>
		</div>
	)
}

export default InputBlock

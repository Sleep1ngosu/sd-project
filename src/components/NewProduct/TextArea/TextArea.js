import React from 'react'
import './TextArea.scss'

const TextArea = (props) => {
	let style = {
		width: props.widthBlock,
		height: `${props.heightBlock}rem`,
		marginTop: props.marginTop,
	}

	let styleArea = {
		width: props.inputWidth,
	}

	return (
		<div style={style} className="newProduct__field__textarea">
			<span className="newProduct__field__textarea__label">{props.label}</span>
			<textarea
				style={styleArea}
				className="newProduct__Field__textarea__textarea"
				width={props.inputWidth}
				max={props.max}
				type={props.type}
				name={props.name}
				value={props.value}
				onChange={(e) => props.onChange(e)}
				disabled={props.disabled}
				required={props.required}
				maxLength={props.max}
			/>
		</div>
	)
}

export default TextArea

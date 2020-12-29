import React from 'react'
import './SKU.scss'
import InputBlock from '../../InputBlock/InputBlock'

const SKU = (props) => {
	return (
		<InputBlock
			max="30"
			label="SKU"
			widthBlock="60.6rem"
			inputWidth="37rem"
			marginTop="2.6rem"
			name={props.name}
			value={props.value}
			onChange={(e) => props.onChange(e)}
		/>
	)
}

export default SKU

import React from 'react'
import './VariationText.scss'

const VariationText = (props) => {
	return (
		<div className="variationText">
			<span className="variationText__label">Variation Text</span>
			<textarea
				value={props.value}
				className="variationText__textarea"
				onChange={(e) => props.onChange(e)}
				name={props.name}
				maxLength="20"
				required={props.isType ? `required` : false}
			/>
		</div>
	)
}

export default VariationText

import React from 'react'
import './VariationText.scss'

const VariationText = (props) => {
	let renderedArea
	props.isType === undefined
		? (renderedArea = (
				<textarea
					value={props.value}
					className="variationText__textarea"
					onChange={(e) => props.onChange(e)}
					name={props.name}
					maxLength="20"
				/>
		  ))
		: (renderedArea = (
				<textarea
					value={props.value}
					required
					className="variationText__textarea"
					onChange={(e) => props.onChange(e)}
					name={props.name}
					maxLength="20"
				/>
		  ))

	return (
		<div className="variationText">
			<span className="variationText__label">Variation Text</span>
			{renderedArea}
		</div>
	)
}

export default VariationText

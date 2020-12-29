import React from 'react'
import './VariationText.scss'

const VariationText = (props) => {
	let renderedArea
	console.log(props.isType)
	props.isType === undefined
		? (renderedArea = <textarea className="variationText__textarea" />)
		: (renderedArea = (
				<textarea required className="variationText__textarea" />
		  ))

	return (
		<div className="variationText">
			<span className="variationText__label">Variation Text</span>
			{renderedArea}
		</div>
	)
}

export default VariationText

import React from 'react'
import './Parent.scss'
import ArrowDown from '../../../../assets/icons/ArrowDown.png'

const Parent = (props) => {
	return (
		<div className="parent">
			<span className="parent__label">Parent</span>
			<div className="parent__input__wrapper">
				<input
					className="parent__input"
					type="text"
					disabled="disabled"
					name={props.name}
					value={props.value}
				/>

				<div className="parent__input__icon">
					<img src={ArrowDown} alt="arrow-down" />
				</div>
			</div>
		</div>
	)
}

export default Parent

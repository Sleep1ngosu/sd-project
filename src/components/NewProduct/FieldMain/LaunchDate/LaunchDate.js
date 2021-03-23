import React from 'react'
import './LaunchDate.scss'
import CalendarIcon from '../../../../assets/icons/CalendarIcon.png'

const LaunchDate = () => {
	return (
		<div className="launchDate">
			<span className="launchDate__label">Launch date</span>
			<div className="launchDate__input__wrapper">
				<input
					type="text"
					className="launchDate__input__input"
					disabled="disabled"
				/>
			</div>
		</div>
	)
}

export default LaunchDate

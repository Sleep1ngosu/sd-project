import React from 'react'
import './InputSelectBlock.scss'
import ArrowDownBold from '../../../../assets/icons/ArrowDownBold.png'
import CalendarIcon from '../../../../assets/icons/CalendarIcon.png'

const InputSelectBlock = (props) => {
	let icon, style

	if (props.type === 'select') {
		icon = <img src={ArrowDownBold} alt="arrow down" />
		style = { top: '1.9rem', right: '0.4rem' }
	} else if (props.type === 'date') {
		icon = <img src={CalendarIcon} alt="calendar" />
		style = { top: '1.1rem', right: '0.9rem' }
	}

	return (
		<div className="productList__field__filter__inputSelectBlock">
			<input
				disabled={props.disabled}
				className="productList__field__filter__inputSelectBlock__input"
				value={props.value}
			/>
			<label>
				<div
					style={style}
					className="productList__field__filter__inputSelectBlock__icon"
				>
					{icon}
				</div>
			</label>
		</div>
	)
}

export default InputSelectBlock

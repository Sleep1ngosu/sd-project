import React from 'react'
import './InputBlockSelect.scss'
import ArrowDown from '../../../assets/icons/ArrowDown.png'

/**
 *
 * props:	{label, options, widthBlock, inputWidth}
 */

const InputBlockSelect = (props) => {
	let options = props.options.map((e, i) => {
		return (
			<option value={e} key={`InputBlockSelect__${i}`}>
				{e}
			</option>
		)
	})
	let inputStyle = {
		width: props.inputWidth,
	}

	const onChange = (e) => {
		props.onChange(e)
	}

	let renderedInput
	props.max
		? (renderedInput = (
				<input
					disabled={props.disabled}
					maxLength={props.max}
					className="sitype__input__input"
					style={inputStyle}
					value={props.value}
					onChange={(e) => props.onChange(e)}
					name={props.name}
				/>
		  ))
		: (renderedInput = (
				<input
					disabled={props.disabled}
					className="sitype__input__input"
					style={inputStyle}
					value={props.value}
					onChange={(e) => props.onChange(e)}
					name={props.name}
				/>
		  ))

	let style = {
		width: props.widthBlock,
		marginTop: props.marginTop,
		paddingTop: props.paddingTop,
		marginLeft: props.marginLeft,
	}

	let labelColor = {
		color: props.color,
	}

	return (
		<div style={style} className="sitype">
			<span style={labelColor} className="sitype__label">
				{props.label}
			</span>
			<div className="sitype__input__wrapper">
				{renderedInput}
				<label>
					<div className="sitype__input__icon">
						<img src={ArrowDown} alt="arrow-down" />
					</div>
					<select
						onChange={(e) => onChange(e)}
						className="sitype__input__select"
						name={props.name}
					>
						{options}
					</select>
				</label>
			</div>
		</div>
	)
}

export default InputBlockSelect

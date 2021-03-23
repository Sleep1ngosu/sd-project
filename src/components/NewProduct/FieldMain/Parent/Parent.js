import React from 'react'
import './Parent.scss'
import ArrowDown from '../../../../assets/icons/ArrowDown.png'
import Switch from '@material-ui/core/Switch'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const Parent = (props) => {
	const optionsList = props.options.map((option, index) => {
		return (
			<MenuItem value={option} key={`option__${index}`}>
				{option}
			</MenuItem>
		)
	})

	optionsList.unshift(
		<MenuItem value="" key={`option__empty`}>
			None
		</MenuItem>
	)

	const selectStyle = (!props.isParent && { display: 'block' }) || {
		display: 'none',
	}

	return (
		<div className="parent">
			<span className="parent__label">Parent</span>
			<div className="parent__input__wrapper">
				<Select
					onChange={(e) => props.onChangeParent(e)}
					className="parent__select"
					labelId="label"
					id="select"
					style={selectStyle}
				>
					{optionsList}
				</Select>
				<input
					className="parent__input"
					type="text"
					disabled="disabled"
					name={props.name}
					value={props.value}
				/>
				<InputLabel id="label">
					<div className="parent__input__icon">
						<img src={ArrowDown} alt="arrow-down" />
					</div>
				</InputLabel>
				<div className="parent__input__isParent">
					<Switch checked={props.isParent} onChange={props.switchIsParent} />
				</div>
			</div>
		</div>
	)
}

export default Parent

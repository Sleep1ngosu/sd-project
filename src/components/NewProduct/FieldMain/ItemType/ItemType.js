import React from 'react'
import './ItemType.scss'
import SearchIcon from '../../../../assets/icons/SearchIcon.png'

const ItemType = (props) => {
	return (
		<div className="itemType">
			<span className="itemType__label">Item type</span>
			<div className="itemType__input__wrapper">
				<input
					className="itemType__input__input"
					type="text"
					disabled="disabled"
					name={props.name}
					value={props.value}
					onChange={(e) => props.onChange(e)}
				/>
				<div className="itemType__input__search">
					<img src={SearchIcon} alt="search-icon" />
				</div>
			</div>
		</div>
	)
}

export default ItemType

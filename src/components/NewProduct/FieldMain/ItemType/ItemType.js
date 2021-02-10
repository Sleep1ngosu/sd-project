import React, { useState } from 'react'
import './ItemType.scss'
import { connect } from 'react-redux'
import SearchIcon from '../../../../assets/icons/SearchIcon.png'
import ChooseItemType from '../../ChooseItemType/ChooseItemType'
import { toggleItemtype } from '../../../../actions/itemType'

const ItemType = (props) => {
	// let [isShow, setShow] = useState(false)

	const onClick = () => {
		// setShow(!isShow)
		props.toggleItemtype()
	}

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
					<div
						onClick={onClick}
						className="itemType__input__search__icon"
					>
						<img src={SearchIcon} alt="search-icon" />
					</div>
					<div>
						<ChooseItemType />
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(null, { toggleItemtype })(ItemType)

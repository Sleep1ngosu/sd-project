import React, { useState } from 'react'
import './Header.scss'
import arrays from '../../../../variables/arrays'
import FilterIcon from '../../../../assets/icons/FilterIcon.png'
import SettingsIcon from '../../../../assets/icons/SettingsIcon.png'
import Filter from '../Filter/Filter'
import {
	productListHeaderSetup,
	createListingHeaderSetup,
	checkListingHeaderSetup,
} from '../../../../helpers/Field/Header/headerSetups'

const Header = (props) => {
	let [isFilterHidden, setFilterHidden] = useState(true)

	let setup = {}

	if (props.type === 'product_list') {
		setup = productListHeaderSetup()
	} else if (props.type === 'create_listing') {
		setup = createListingHeaderSetup()
	} else if (props.type === 'check_listing') {
		setup = checkListingHeaderSetup()
	}

	const openFilter = () => {
		setFilterHidden(!isFilterHidden)
	}

	const closeFilter = () => {
		setFilterHidden(true)
	}

	return (
		<div style={setup.styleWrapper} className="productList__field__header">
			<div className="productList__field__header__filter">
				<div
					onClick={openFilter}
					className="productList__field__header__filter__icon"
				>
					<img src={FilterIcon} alt="filter icon" />
				</div>
				<Filter close={closeFilter} isHidden={isFilterHidden} />
			</div>
			{setup.headerList}
			<div className="productList__field__header__settings">
				<div className="productList__field__header__settings__icon">
					<img src={SettingsIcon} alt="settings icon" />
				</div>
			</div>
		</div>
	)
}

export default Header

import React, { useState } from 'react'
import './Block.scss'
import ActiveRadioIcon from '../../../../assets/icons/ActiveRadioIcon.png'
import RadioIcon from '../../../../assets/icons/RadioIcon.png'
import MenuIcon from '../../../../assets/icons/MenuIcon.png'
import RightArrowIcon from '../../../../assets/icons/RightArrowIcon.png'
import DownArrowIcon from '../../../../assets/icons/DownArrowIcon.png'
import Settings from '../Settings/Settings'
import Iconlist from '../../../../assets/icons/Iconlist.png'
import {
	productListBlockSetup,
	createListingBlockSetup,
	checkListingBlockSetup,
} from '../../../../helpers/Field/Block/blockSetups'

/**
 *
 * props:   {index, image/images, sku, title, isParent, parent, createDate, launchDate}
 */

const Block = (props) => {
	let style, styleTextBlock, settingsStyle
	if (props.index % 2 === 0) {
		style = { backgroundColor: '#f2f2f2' }
	} else style = { backgroundColor: 'white' }

	let [isExpanded, setExpanded] = useState(false)

	let rightArrowIconStyle, downArrowIconStyle, settingsIconStyle

	if (isExpanded) {
		rightArrowIconStyle = { display: 'none' }
		downArrowIconStyle = { display: 'block' }
	} else {
		rightArrowIconStyle = { display: 'block' }
		downArrowIconStyle = { display: 'none' }
	}

	if (isExpanded) {
		style = { ...style, height: 'auto', minHeight: '13rem' }
		styleTextBlock = { maxHeight: '100rem', fontWeight: 'bold' }
	} else {
		style = { ...style, height: '13rem' }
		styleTextBlock = { maxHeight: '12rem' }
	}

	const onClickExpand = () => {
		setExpanded(!isExpanded)
	}

	if (!props.title) {
		rightArrowIconStyle = { display: 'none' }
		downArrowIconStyle = { display: 'none' }
		settingsIconStyle = { display: 'none' }
	}

	if (props.index === props.active) {
		settingsStyle = { display: 'block' }
	} else {
		settingsStyle = { display: 'none' }
	}

	let setup = {}
	// let styleDate, styleWrapper, renderedIcon

	if (props.type === 'product_list') {
		setup = productListBlockSetup(props, settingsIconStyle)
	} else if (props.type === 'create_listing') {
		setup = createListingBlockSetup()
	} else if (props.type === 'check_listing') {
		setup = checkListingBlockSetup(props, settingsIconStyle)
	}

	style = { ...setup.styleWrapper, ...style }

	return (
		<div style={style} className="productList__field__block__wrapper">
			<div className="productList__field__block__image"></div>
			{/** PICTURES */}
			<div
				style={styleTextBlock}
				className="productList__field__block__sku block__element "
			>
				<div
					style={rightArrowIconStyle}
					className="productList__field__block__moreIcon"
					onClick={onClickExpand}
				>
					<img src={RightArrowIcon} alt="right arrow icon" />
				</div>
				<div
					style={downArrowIconStyle}
					className="productList__field__block__moreIcon"
					onClick={onClickExpand}
				>
					<img src={DownArrowIcon} alt="down arrow icon" />
				</div>
				{props.sku}
			</div>
			<div
				style={styleTextBlock}
				className="productList__field__block__title block__element "
			>
				{props.title}
			</div>
			<div
				style={setup.styleDate}
				className="productList__field__block__createDate block__element "
			>
				{props.createDate}
			</div>
			<div
				style={setup.styleDate}
				className="productList__field__block__launchDate block__element "
			>
				{props.launchDate}
			</div>
			<div className="productList__field__block__settings">
				{setup.renderedIcon}
				<Settings type={props.type} style={settingsStyle} />
			</div>
		</div>
	)
}

export default Block

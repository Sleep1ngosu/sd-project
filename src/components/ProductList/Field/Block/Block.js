import React, { useState } from 'react'
import './Block.scss'
import { connect } from 'react-redux'
import RightArrowIcon from '../../../../assets/icons/RightArrowIcon.png'
import DownArrowIcon from '../../../../assets/icons/DownArrowIcon.png'
import Settings from '../Settings/Settings'
import {
	productListBlockSetup,
	createListingBlockSetup,
	checkListingBlockSetup,
} from '../../../../helpers/Field/Block/blockSetups'
import { addProductToListing } from '../../../../actions/listing'
import { openPhotos } from '../../../../actions/photos'
import { setBlocker } from '../../../../actions/blocker'

/**
 *
 * props:   {index, image/images, sku, title, isParent, parent, createDate, launchDate}
 */

const Block = (props) => {
	let style, styleTextBlock, settingsStyle
	if (props.serial % 2 === 0) {
		style = { backgroundColor: 'white' }
	} else if (props.isChildren) {
		// color for childs
		style = { backgroundColor: '#f0dfdf' }
	} else style = { backgroundColor: '#f2f2f2' }

	let [isExpanded, setExpanded] = useState(false)

	let rightArrowIconStyle, downArrowIconStyle, settingsIconStyle

	if (isExpanded) {
		rightArrowIconStyle = { display: 'none' }
		downArrowIconStyle = { display: 'block' }
	} else {
		rightArrowIconStyle = { display: 'block' }
		downArrowIconStyle = { display: 'none' }
	}

	if (isExpanded || props.isChildren) {
		style = { ...style, height: 'auto', minHeight: '13rem' }
		styleTextBlock = { maxHeight: '100rem', fontWeight: 'bold' }
	} else {
		style = { ...style, height: '13rem' }
		styleTextBlock = { maxHeight: '12rem' }
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

	const onClickExpand = () => {
		props.setExpanded(props.id)
		setExpanded(!isExpanded)
		props.setRefresh(!props.refresh)
	}

	const openPhotos = () => {
		if (props.product.photos.length) {
			props.openPhotos(props.product.photos)
			props.setBlocker()
		}
	}

	const addToListing = () => {
		props.addProductToListing(props.sku)
	}

	let setup = {}
	// let styleDate, styleWrapper, renderedIcon

	if (props.type === 'product_list') {
		setup = productListBlockSetup(props, settingsIconStyle)
	} else if (props.type === 'create_listing') {
		setup = createListingBlockSetup(addToListing)
	} else if (props.type === 'check_listing') {
		setup = checkListingBlockSetup(props, settingsIconStyle)
	}

	style = { ...setup.styleWrapper, ...style }

	const startedPhoto =
		(props.product.photos.length && props.product.photos[0].image) || null

	if (props.isChildren && props.expandedIndex.indexOf(props.parent) === -1) {
		style = { ...style, display: 'none' }
	}

	let isChildrens
	if (props.isChildren || props.childs.length === 0) {
		isChildrens = false
	} else isChildrens = true

	return (
		<div style={style} className="productList__field__block__wrapper">
			<div onClick={openPhotos} className="productList__field__block__image">
				<img
					style={(startedPhoto && { display: 'flex' }) || { display: 'none' }}
					className="image"
					src={startedPhoto}
					alt="image"
					// onClick={openPhotos}
				/>
			</div>
			<div
				style={styleTextBlock}
				className="productList__field__block__sku block__element "
				title={props.sku}
			>
				{isChildrens ? (
					<div
						style={rightArrowIconStyle}
						className="productList__field__block__moreIcon"
						onClick={onClickExpand}
					>
						<img src={RightArrowIcon} alt="right arrow icon" />
					</div>
				) : null}
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
				title={props.title}
			>
				{props.title}
			</div>
			{/* <div
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
			</div> */}
			<div className="productList__field__block__settings">
				{setup.renderedIcon}
				<Settings
					sku={props.sku}
					type={props.type}
					style={settingsStyle}
					settingsToggle={props.settingsToggle}
					index={props.index}
					product={props.product}
				/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		photos: state.photos,
	}
}

export default connect(mapStateToProps, {
	addProductToListing,
	openPhotos,
	setBlocker,
})(Block)

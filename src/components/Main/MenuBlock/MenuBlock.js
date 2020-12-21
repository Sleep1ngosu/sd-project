import React from 'react'
import './MenuBlock.scss'
import { Link } from 'react-router-dom'
import CreateProduct from '../../../assets/icons/CreateProduct.png'
import CreateListing from '../../../assets/icons/CreateListing.png'
import ShowProductList from '../../../assets/icons/ShowProductList.png'

const MenuBlock = (props) => {
	let renderedIcon, path
	if (props.icon === 'CreateProduct') {
		renderedIcon = CreateProduct
		path = '/products/new_product'
	} else if (props.icon === 'CreateListing') {
		renderedIcon = CreateListing
		path = '/listing/listing_products'
	} else if (props.icon === 'ShowProductList') {
		renderedIcon = ShowProductList
		path = '/products'
	}

	return (
		<Link to={path}>
			<div className="MenuBlock__wrapper">
				<div className="MenuBlock__icon">
					<img src={renderedIcon} alt="icon" />
				</div>
				<div className="MenuBlock__title">{props.title}</div>
			</div>
		</Link>
	)
}

export default MenuBlock

import React, { useState } from 'react'
import './Settings.scss'
import { connect } from 'react-redux'
import EditIcon from '../../../../assets/icons/EditIcon.png'
import DeleteIcon from '../../../../assets/icons/DeleteIcon.png'
import Iconlist from '../../../../assets/icons/Iconlist.png'
import {
	removeProductFromListing,
	addProductToListing,
} from '../../../../actions/listing'
import { setEditing } from '../../../../actions/editingProduct'
import { history } from '../../../../history'
import { Redirect } from 'react-router-dom'

const Settings = (props) => {
	let addInListingStyle,
		onDelete = null
	if (props.type === 'product_list') {
		addInListingStyle = { display: 'grid' }
	} else if (props.type === 'check_listing') {
		addInListingStyle = { display: 'none' }
		onDelete = () => {
			props.removeProductFromListing(props.sku)
			props.settingsToggle(props.index)
		}
	}

	let [redirect, setRedirect] = useState(false)

	const addToListing = () => {
		props.addProductToListing(props.sku)
		props.settingsToggle(props.index)
	}

	const onEdit = () => {
		props.setEditing(props.product)
		history.push('/products/new_product')
		setRedirect(true)
	}

	if (redirect) {
		return <Redirect to="/products/new_product" />
	}

	return (
		<div style={props.style} className="productList__field__settings__wrapper">
			<div className="productList__field__settings">
				<div className="productList__field__settings__edit">
					<div className="productList__field__settings__edit__icon">
						<img src={EditIcon} alt="edit icon" />
					</div>
					<div
						onClick={onEdit}
						className="productList__field__settings__edit__text"
					>
						Редактировать
					</div>
				</div>
				<div className="productList__field__settings__delete">
					<div className="productList__field__settings__delete__icon">
						<img src={DeleteIcon} alt="delete icon" />
					</div>
					<div
						onClick={onDelete}
						className="productList__field__settings__delete__text"
					>
						Удалить
					</div>
				</div>
				<div
					style={addInListingStyle}
					className="productList__field__settings__add"
				>
					<div className="productList__field__settings__add__icon">
						<img src={Iconlist} alt="add icon" />
					</div>
					<div
						onClick={addToListing}
						className="productList__field__settings__add__text"
					>
						Добавить в листинг
					</div>
				</div>
			</div>
		</div>
	)
}

export default connect(null, {
	removeProductFromListing,
	addProductToListing,
	setEditing,
})(Settings)

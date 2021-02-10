import React from 'react'
import './Settings.scss'
import EditIcon from '../../../../assets/icons/EditIcon.png'
import DeleteIcon from '../../../../assets/icons/DeleteIcon.png'
import Iconlist from '../../../../assets/icons/Iconlist.png'

const Settings = (props) => {
	// console.log(props.type)
	let addInListingStyle
	if (props.type === 'product_list') {
		addInListingStyle = { display: 'grid' }
	} else if (props.type === 'check_listing') {
		addInListingStyle = { display: 'none' }
	}
	return (
		<div
			style={props.style}
			className="productList__field__settings__wrapper"
		>
			<div className="productList__field__settings">
				<div className="productList__field__settings__edit">
					<div className="productList__field__settings__edit__icon">
						<img src={EditIcon} alt="edit icon" />
					</div>
					<div className="productList__field__settings__edit__text">
						Редактировать
					</div>
				</div>
				<div className="productList__field__settings__delete">
					<div className="productList__field__settings__delete__icon">
						<img src={DeleteIcon} alt="delete icon" />
					</div>
					<div className="productList__field__settings__delete__text">
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
					<div className="productList__field__settings__add__text">
						Добавить в листинг
					</div>
				</div>
			</div>
		</div>
	)
}

export default Settings

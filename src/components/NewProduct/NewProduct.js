import React, { useState } from 'react'
import './NewProduct.scss'
import { connect } from 'react-redux'
import NavLinks from './NavLinks/NavLinks'
import NavBody from '../NavBody/NavBody'
import FieldMain from './FieldMain/FieldMain'
import FieldDescription from './FieldDescription/FieldDescription'
import FieldPhoto from './FieldPhoto/FieldPhoto'
import FieldSizes from './FieldSizes/FieldSizes'
import { clearAlert } from '../../actions/alert'

const NewProduct = ({ clearAlert, isEditing }) => {
	let [active, setActive] = useState(0)
	let titles = ['Основные', 'Описание', 'Изображение', 'Размеры']
	const mode = (isEditing && 'Editing') || 'Creating'

	const changeActive = (e) => {
		setActive(e.target.id)
		clearAlert()
	}

	const onClickNextField = () => {
		setActive(+active + 1)
	}

	const onClickToStart = () => {
		setActive(0)
	}

	console.log(active)

	let renderedComponent
	if (+active === 0) {
		renderedComponent = (
			<FieldMain
				height="138.9rem"
				paddingTop="6.2rem"
				onClickNextField={onClickNextField}
				mode={mode}
			/>
		)
	} else if (+active === 1) {
		renderedComponent = (
			<FieldDescription
				height="142rem"
				paddingTop="2rem"
				onClickNextField={onClickNextField}
				mode={mode}
			/>
		)
	} else if (+active === 2) {
		renderedComponent = (
			<FieldPhoto onClickNextField={onClickNextField} mode={mode} />
		)
	} else if (+active === 3) {
		renderedComponent = (
			<FieldSizes onClickToStart={onClickToStart} mode={mode} />
		)
	}

	return (
		<div className="newProduct__wrapper">
			<NavLinks width="17.4rem" text="Создание товара" />
			<NavBody
				titles={titles}
				active={active}
				onClick={(e) => changeActive(e)}
			/>
			{renderedComponent}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isEditing: state.editingProduct.isEditing,
	}
}

export default connect(mapStateToProps, { clearAlert })(NewProduct)

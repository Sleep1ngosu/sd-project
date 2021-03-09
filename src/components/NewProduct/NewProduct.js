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

const NewProduct = ({ clearAlert }) => {
	let [active, setActive] = useState(0)
	let titles = ['Основные', 'Описание', 'Изображение', 'Размеры']

	const changeActive = (e) => {
		setActive(e.target.id)
		clearAlert()
	}

	let renderedComponent
	if (+active === 0) {
		renderedComponent = <FieldMain height="138.9rem" paddingTop="6.2rem" />
	} else if (+active === 1) {
		renderedComponent = (
			<FieldDescription height="142rem" paddingTop="2rem" />
		)
	} else if (+active === 2) {
		renderedComponent = <FieldPhoto />
	} else if (+active === 3) {
		renderedComponent = <FieldSizes />
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

export default connect(null, { clearAlert })(NewProduct)

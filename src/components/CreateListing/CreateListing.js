import React, { useState } from 'react'
import './CreateListing.scss'
import NavLinks from '../NewProduct/NavLinks/NavLinks'
import ListingSettings from './ListingSettings/ListingSettings'
import NavBody from '../NavBody/NavBody'
import Field from '../ProductList/Field/Field'

const CreateListing = () => {
	let titles = ['Список товаров', 'Просмотр листинга']
	let [active, setActive] = useState(0)

	const changeActive = (e) => {
		setActive(e.target.id)
	}

	let renderedComponent
	if (+active === 0) {
		renderedComponent = <Field type="create_listing" />
	} else if (+active === 1) {
		renderedComponent = <Field type="check_listing" />
	}

	return (
		<div className="createListing__wrapper">
			<NavLinks text="Создание листинга" width="26.9rem" />
			{+active === 1 ? <ListingSettings /> : null}
			<NavBody
				titles={titles}
				active={active}
				onClick={(e) => changeActive(e)}
				width="41.5rem"
			/>
			{renderedComponent}
		</div>
	)
}

export default CreateListing

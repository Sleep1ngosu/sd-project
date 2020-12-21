import React, { useState } from 'react'
import './NewProduct.scss'
import NavLinks from './NavLinks/NavLinks'
import NavBody from './NavBody/NavBody'
import Field from './Field/Field'

const NewProduct = () => {
	let [active, setActive] = useState(0)

	const changeActive = (e) => {
		setActive(e.target.id)
	}

	return (
		<div className="newProduct__wrapper">
			<NavLinks />
			<NavBody active={active} onClick={(e) => changeActive(e)} />
			<Field />
		</div>
	)
}

export default NewProduct

import React from 'react'
import './Main.scss'
import MenuBlock from './MenuBlock/MenuBlock'

const Main = () => {
	return (
		<div className="Main__wrapper">
			<MenuBlock icon="CreateProduct" title="Создать товар" />
			<MenuBlock icon="ShowProductList" title="Просмотр списка товаров" />
			<MenuBlock icon="CreateListing" title="Создать листинг" />
		</div>
	)
}

export default Main

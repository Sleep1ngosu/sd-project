import React from 'react'
import './ProductList.scss'
import NavLinks from '../NewProduct/NavLinks/NavLinks'
import Field from './Field/Field'

const ProductList = () => {
	return (
		<div className="productList__wrapper">
			<NavLinks width="26.9rem" text="Просмотр списка товаров" />
			<Field type="product_list" />
		</div>
	)
}

export default ProductList

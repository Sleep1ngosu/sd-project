import React from 'react'
import './ProductList.scss'
import NavLinks from '../NewProduct/NavLinks/NavLinks'
import ProductListField from './ProductListField/ProductListField'

const ProductList = () => {
	return (
		<div className="productList__wrapper">
			<NavLinks width="26.9rem" text="Просмотр списка товаров" />
			<ProductListField type="product_list" />
		</div>
	)
}

export default ProductList

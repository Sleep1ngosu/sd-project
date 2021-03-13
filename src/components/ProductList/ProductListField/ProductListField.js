import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './ProductListField.scss'
import { getItems } from '../../../api/getItems'
import Block from '../Field/Block/Block'
import Header from '../Field/Header/Header'

const ProductListField = (props) => {
	let [settingsIndex, setSettingIndex] = useState(undefined)
	const [products, setProducts] = useState([])
	const [expandedIndex, setExpandedIndex] = useState([])
	let [refresh, setRefresh] = useState(false)

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await getItems()
			if (response) {
				setProducts(response.data)
			}
		}

		fetchProducts()
	}, [])

	const settingsToggle = (index) => {
		if (index === settingsIndex) {
			setSettingIndex(undefined)
		} else {
			setSettingIndex(index)
		}
	}

	let style = { marginTop: '5.1rem' }

	const setExpanded = (id) => {
		const array = expandedIndex
		if (array.indexOf(id) !== -1) {
			const index = array.indexOf(id)
			array.splice(index, 1)
			setExpandedIndex(array)
		} else {
			array.push(id)
			setExpandedIndex(array)
		}
	}

	let blocksList = [],
		index = 1
	products.forEach((product, i) => {
		if (!product.parent_id) {
			const childs = []
			products.forEach((pr) => {
				if (pr.parent_id === product.id) {
					childs.push(pr.id)
				}
			})
			index++
			blocksList.push(
				<Block
					key={`productList__field__${i}`}
					serial={index}
					index={i}
					title={product.description.title}
					sku={product.sku}
					onClickSettings={(i) => settingsToggle(i)}
					active={settingsIndex}
					type={props.type}
					id={product.id}
					settingsToggle={() => settingsToggle(i)}
					product={product}
					childs={childs}
					products={products}
					setExpanded={setExpanded}
					expandedIndex={expandedIndex}
					setRefresh={setRefresh}
					refresh={refresh}
				/>
			)
		}
		products.forEach((cur_product, cur_index) => {
			if (cur_product.parent_id === product.id) {
				blocksList.push(
					<Block
						key={`childList__field__${cur_index}`}
						index={cur_index}
						title={cur_product.description.title}
						sku={cur_product.sku}
						onClickSettings={(i) => settingsToggle(i)}
						active={settingsIndex}
						type={props.type}
						id={cur_product.id}
						settingsToggle={() => settingsToggle(cur_index)}
						product={cur_product}
						isChildren={true}
						childs={[]}
						setExpanded={setExpanded}
						expandedIndex={expandedIndex}
						parent={cur_product.parent_id}
						setRefresh={setRefresh}
						refresh={refresh}
					/>
				)
			}
		})
	})

	const bodyStyle = { maxHeight: '104rem', height: '100%' }

	return (
		<div style={style} className="productList__field__wrapper">
			<Header type={props.type} />
			<div style={bodyStyle} className="productList__field__body">
				{blocksList}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		listingProducts: state.listing.products,
		sellername: state.listing.sellername,
		marketplace: state.listing.marketplace,
		sellers: state.listing.settings.sellers,
		markets: state.listing.settings.markets,
	}
}

export default connect(mapStateToProps, {})(ProductListField)

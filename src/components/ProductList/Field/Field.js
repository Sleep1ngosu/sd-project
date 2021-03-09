import React, { useState, useEffect } from 'react'
import './Field.scss'
import { connect } from 'react-redux'
import Header from './Header/Header'
import Block from './Block/Block'
import { getItems } from '../../../api/getItems'
import Alert from './Alert/Alert'
import { setListingSettings, sendListing } from '../../../actions/listing'

const Field = (props) => {
	let [settingsIndex, setSettingIndex] = useState(undefined)
	const [products, setProducts] = useState([])
	const [expandedIndex, setExpandedIndex] = useState([])
	let [refresh, setRefresh] = useState(false)
	// const [listingData, setListingData] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await getItems()
			if (response) {
				setProducts(response.data)
			}
		}
		const fetchListings = async () => {
			props.setListingSettings()
		}

		fetchListings()
		fetchProducts()
	}, [])

	const settingsToggle = (index) => {
		if (index === settingsIndex) {
			setSettingIndex(undefined)
		} else {
			setSettingIndex(index)
		}
	}

	let style
	if (props.type === 'product_list') {
		style = { marginTop: '5.1rem' }
	} else if (props.type === 'create_listing') {
		style = { marginTop: '2.6rem' }
	} else if (props.type === 'check_listing') {
		style = { marginTop: '1.6rem' }
	}

	// let blocksList = products.map((product, i) => {
	// 	if (!product.parent_id) {
	// 		return (
	// 			<Block
	// 				key={`productList__field__${i}`}
	// 				index={i}
	// 				title={product.description.title}
	// 				sku={product.sku}
	// 				onClickSettings={(i) => settingsToggle(i)}
	// 				active={settingsIndex}
	// 				type={props.type}
	// 				id={product.id}
	// 				settingsToggle={() => settingsToggle(i)}
	// 				product={product}
	// 			/>
	// 		)
	// 	}
	// })

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

	let blocksList = []
	products.forEach((product, i) => {
		if (!product.parent_id) {
			const childs = []
			products.forEach((pr) => {
				if (pr.parent_id === product.id) {
					childs.push(pr.id)
				}
			})
			blocksList.push(
				<Block
					key={`productList__field__${i}`}
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

	// let parents = [],
	// 	childs = []
	// products.forEach((product) => {
	// 	if (product.is_parent) {
	// 		parents.push(product.id)
	// 	}
	// 	if (product.parent_id) {
	// 		childs.push({ product, parent: product.parent_id })
	// 	}
	// })
	// const childList = []
	// parents.forEach((parent) => {
	// 	const parentChilds = childs.filter((child) => child.parent === parent)
	// 	childList.push({ parent, products: parentChilds })
	// })

	// const newproductlist = []

	const listingData = []

	products.forEach((product) => {
		if (props.listingProducts.indexOf(product.sku) !== -1) {
			listingData.push(product)
		}
	})

	const sendListing = () => {
		// props.sendListing()
		const ids = []
		const name = props.listingProducts[0]
		props.listingProducts.forEach((product_sku) => {
			products.forEach((product) => {
				if (product.sku === product_sku) {
					ids.push(product.id)
				}
			})
		})
		const data = {
			seller: props.sellername,
			marketplace: props.marketplace,
			created_at: null,
			products: ids,
			name,
		}
		props.sendListing(data)
	}

	const listingDataList = listingData.map((product, i) => {
		return (
			<Block
				key={`productList__field__${i}`}
				index={i}
				title={product.description.title}
				sku={product.sku}
				onClickSettings={(i) => settingsToggle(i)}
				active={settingsIndex}
				type={props.type}
				id={product.id}
				settingsToggle={() => settingsToggle(i)}
				product={product}
			/>
		)
	})

	const bodyStyle = (props.type === 'check_listing' && {
		maxHeight: '50rem',
	}) || { maxHeight: '104rem', height: '100%' }

	return (
		<div style={style} className="productList__field__wrapper">
			<Header type={props.type} />
			<div style={bodyStyle} className="productList__field__body">
				{props.type !== 'check_listing' ? blocksList : listingDataList}
			</div>
			<div
				style={
					(props.type === 'check_listing' && { display: 'flex' }) || {
						display: 'none',
					}
				}
				className="sendListing"
			>
				<button
					onClick={() => sendListing()}
					type="button"
					className="sendListing__button"
				>
					Отправить
				</button>
				<Alert />
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		listingProducts: state.listing.products,
		sellername: state.listing.sellername,
		marketplace: state.listing.marketplace,
	}
}

export default connect(mapStateToProps, { setListingSettings, sendListing })(
	Field
)

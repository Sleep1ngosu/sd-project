import React, { useState, useEffect } from 'react'
import './CheckListingField.scss'
import { connect } from 'react-redux'
import Header from '../../ProductList/Field/Header/Header'
import Block from '../../ProductList/Field/Block/Block'
import { getItems } from '../../../api/getItems'
import Alert from '../../Alert/Alert'
import { setListingSettings, sendListing } from '../../../actions/listing'

const CheckListingField = (props) => {
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

	let style = { marginTop: '1.6rem' }

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

	const listingData = [],
		blocksList = []

	console.log(products)
	products.forEach((product) => {
		if (props.listingProducts.indexOf(product.sku) !== -1) {
			listingData.push(product)
		}
	})

	const sendListing = () => {
		const ids = []
		const name = props.listingProducts[0]
		props.listingProducts.forEach((product_sku) => {
			products.forEach((product) => {
				if (product.sku === product_sku) {
					ids.push(product.id)
				}
			})
		})

		let seller, market

		props.sellers.forEach((array) => {
			if (array.indexOf(props.sellername) !== -1) {
				seller = array[0]
			}
		})

		props.markets.forEach((array) => {
			if (array.indexOf(props.marketplace) !== -1) {
				market = array[0]
			}
		})

		const data = {
			seller: seller,
			marketplace: market,
			created_at: null,
			products: ids,
			name,
		}
		props.sendListing(data)
	}

	console.log(listingData)

	let index = 1
	listingData.forEach((product, i) => {
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
				childs={[]}
				products={products}
				setExpanded={setExpanded}
				expandedIndex={expandedIndex}
				setRefresh={setRefresh}
				refresh={refresh}
			/>
		)
	})

	const bodyStyle = {
		maxHeight: '50rem',
	}

	return (
		<div style={style} className="productList__field__wrapper">
			<Header type={props.type} />
			<div style={bodyStyle} className="productList__field__body">
				{/* {listingDataList} */}
				{blocksList}
			</div>
			<div style={{ display: 'flex' }} className="sendListing">
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
		sellers: state.listing.settings.sellers,
		markets: state.listing.settings.markets,
	}
}

export default connect(mapStateToProps, { setListingSettings, sendListing })(
	CheckListingField
)

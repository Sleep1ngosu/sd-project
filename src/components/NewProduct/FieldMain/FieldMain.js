import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './FieldMain.scss'
import InputBlock from '../InputBlock/InputBlock'
import arrays from '../../../variables/arrays'
// import Input from './InputBlock/Input/Input'
import Button from './Button/Button'
import Parent from './Parent/Parent'
import ItemType from './ItemType/ItemType'
import InputBlockSelect from '../InputBlockSelect/InputBlockSelect'
import CreateDate from './CreateDate/CreateDate'
import LaunchDate from './LaunchDate/LaunchDate'
import VariationText from './VariationText/VariationText'
import { clearItemType, setId } from '../../../actions/itemType'
import {
	setMain,
	setMainAndCreate,
	setDescription,
	setSizes,
	setPhotos,
} from '../../../actions/product'
import { createProduct } from '../../../actions/createProduct'
import { getItems } from '../../../api/getItems'
import { editItem } from '../../../actions/editingProduct'
import Alert from '../../Alert/Alert'
import { toggleEditing, clearEditing } from '../../../actions/editingProduct'
import { findProductId } from '../../../helpers/findProductId'
import { setErrorAlert } from '../../../actions/alert'

const Main = (props) => {
	const initialData = {
		is_parent: '',
		parent_id: '',
		variation_type: '',
		variation_text: '',
		item_type: '',
		sku: '',
		sp_id_type: 'UPC',
		sp_id_value: '',
		price: '0.00',
		quantity: 0,
		battery: 'N',
		dangerous: 'NA',
	}

	let [data, setData] = useState({
		is_parent: props.editingProduct.is_parent || props.data.is_parent || false,
		parent_id: props.editingProduct.parent_id || props.data.parent_id || '',
		variation_type:
			props.editingProduct.variation_type ||
			props.data.variation_type ||
			'Size',
		variation_text:
			props.editingProduct.variation_text ||
			props.data.variation_text ||
			undefined,
		item_type: props.editingProduct.item_type || props.data.item_type || '',
		sku: props.editingProduct.sku || props.data.sku || '',
		sp_id_type:
			props.editingProduct.sp_id_type || props.data.sp_id_type || 'UPC',
		sp_id_value:
			props.editingProduct.sp_id_value || props.data.sp_id_value || undefined,
		price: props.editingProduct.price || props.data.price || '0.00',
		quantity: props.editingProduct.quantity || props.data.quantity || 0,
		battery: props.editingProduct.battery || props.data.battery || 'NO',
		dangerous:
			props.editingProduct.dangerous ||
			props.data.dangerous ||
			'Not Applicable',
	})

	let [products, setProducts] = useState([])

	let [parents, setParents] = useState([])

	const {
		is_parent,
		parent_id,
		variation_type,
		variation_text,
		sku,
		sp_id_type,
		sp_id_value,
		price,
		quantity,
		battery,
		dangerous,
	} = data

	useEffect(() => {
		const fetch = async () => {
			const response = await getItems()
			const skus = []
			if (response) {
				response.data.map((item) => {
					if (item.is_parent) {
						skus.push(item.sku)
					}
				})
			}
			setParents(skus)
			setProducts(response.data)
		}
		fetch()
	}, [])

	let saveButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
	}

	let variationButtonStyle = {
		border: '.3rem solid #FFBA0A',
		color: '#FFBA0A',
		width: '20rem',
		backgroundColor: 'white',
	}

	let nextButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
	}

	let formStyle = {
		height: props.height,
		paddingTop: props.paddingTop,
	}

	const onSubmit = async (e, mode) => {
		e.preventDefault()
		const newData = {
			...data,
			description: props.data.description,
			dimensions: props.data.dimensions,
			photos: props.data.photos,
		}
		if (props.mode === 'Creating') {
			await props.setMainAndCreate(newData, props.id, products)
		} else if (props.mode === 'Editing') {
			await editItem(props.editingProduct, newData)
		}
		props.clearItemType()
		setData(initialData)
	}

	const onCreateVariation = () => {
		if (props.prev.is_parent) {
			const id = findProductId(products, props.prev.sku)
			const main = {
				...props.prev,
				is_parent: false,
				parent_id: id,
			}
			delete main.description
			delete main.photos
			delete main.dimensions
			const description = { ...props.prev.description }
			const dimensions = { ...props.prev.dimensions }
			const photos = [...props.prev.photos]
			setData({
				is_parent: main.is_parent,
				parent_id: main.parent_id,
				variation_type: main.variation_type,
				variation_text: main.variation_text,
				item_type: main.item_type,
				sku: main.sku,
				sp_id_type: main.sp_id_type,
				sp_id_value: main.sp_id_value,
				price: main.price,
				quantity: main.quantity,
				battery: main.battery,
				dangerous: main.dangerous,
			})

			props.setId(main.item_type)
			props.setMain(main)
			props.setDescription(description)
			props.setSizes(dimensions)
			props.setPhotos(photos)
		} else {
			props.setErrorAlert(`You haven't already created parent product`)
		}
	}

	const onClickNextButton = () => {
		props.setMain(data)
		props.onClickNextField()
	}

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const switchIsParent = (e) => {
		setData({ ...data, is_parent: !data.is_parent, parent_id: '' })
	}

	const onChangeParent = (e) => {
		setData({ ...data, parent_id: e.target.value })
	}

	const toggleMode = () => {
		if (props.isEditing) {
			props.clearEditing()
		} else {
			props.toggleEditing()
		}
	}

	return (
		<form
			autoComplete="off"
			onSubmit={(e) => onSubmit(e, props.mode)}
			style={formStyle}
			className="newProduct__Main"
		>
			<div className="newProduct__Main__edit">
				<div className="newProduct__Main__edit__text">mode: {props.mode}</div>
				<button
					onClick={toggleMode}
					type="button"
					className="newProduct__Main__edit__changeBtn"
				>
					Change mode
				</button>
			</div>
			<Parent
				isParent={is_parent}
				switchIsParent={switchIsParent}
				name="parent_id"
				value={parent_id}
				options={parents}
				onChangeParent={(e) => onChangeParent(e)}
			/>
			{/**not required */}
			<ItemType
				name="item_type"
				value={data.item_type || props.id}
				onChange={(e) => onChange(e)}
			/>
			{/**required */}
			<InputBlock
				max="30"
				label="SKU"
				widthBlock="60.6rem"
				inputWidth="37rem"
				marginTop="2.6rem"
				name="sku"
				value={
					(props.mode === 'Editing' &&
						props.editingProduct &&
						props.editingProduct.sku) ||
					sku
				}
				onChange={(e) => onChange(e)}
				required={true}
				disabled={
					(props.mode === 'Editing' && props.editingProduct && 'disabled') ||
					false
				}
			/>
			{/**required */}
			<InputBlockSelect
				disabled="disabled"
				marginTop="2.6rem"
				max="5"
				label="Standard identification type"
				options={arrays.newProductMain.options.SIType}
				widthBlock="60.6rem"
				inputWidth="37rem"
				name="sp_id_type"
				value={sp_id_type}
				onChange={(e) => onChange(e)}
			/>
			{/**required */}
			<InputBlock
				marginTop="2.6rem"
				inputWidth="37rem"
				widthBlock="60.6rem"
				label="Standard identification value"
				max="12"
				name="sp_id_value"
				value={sp_id_value}
				onChange={(e) => onChange(e)}
				disabled="disabled"
			/>
			{/**not required */}
			<CreateDate />
			{/**not required */}
			<LaunchDate />
			{/**not required */}
			<InputBlock
				marginTop="2.6rem"
				inputWidth="37rem"
				widthBlock="60.6rem"
				label="Price $"
				name="price"
				value={price}
				onChange={(e) => onChange(e)}
				required={true}
			/>
			{/**required */}
			<InputBlock
				marginTop="2.6rem"
				inputWidth="37rem"
				widthBlock="60.6rem"
				label="Quantity"
				name="quantity"
				value={quantity}
				onChange={(e) => onChange(e)}
			/>
			{/**not required */}
			<InputBlockSelect
				disabled="disabled"
				marginTop="2.6rem"
				max="3"
				label="Battery"
				options={arrays.newProductMain.options.Battery}
				widthBlock="60.6rem"
				inputWidth="37rem"
				name="battery"
				value={battery}
				onChange={(e) => onChange(e)}
			/>
			{/**required */}
			<InputBlockSelect
				marginTop="2.6rem"
				disabled="disabled"
				label="Applicable Dangerous"
				options={arrays.newProductMain.options.ApplicableDangerous}
				widthBlock="60.6rem"
				inputWidth="37rem"
				name="dangerous"
				value={dangerous}
				onChange={(e) => onChange(e)}
			/>
			{/**required */}
			<InputBlock
				marginTop="2.6rem"
				inputWidth="37rem"
				widthBlock="60.6rem"
				label="ASIN"
				disabled="disabled"
			/>
			{/**empty */}
			<InputBlockSelect
				marginTop="2.6rem"
				disabled="disabled"
				label="Variation Type"
				options={arrays.newProductMain.options.VariationType}
				widthBlock="60.6rem"
				inputWidth="37rem"
				name="variation_type"
				value={variation_type}
				onChange={(e) => onChange(e)}
			/>
			{/**not required */}
			<VariationText
				isType={data.variation_type}
				name="variation_text"
				value={variation_text}
				onChange={(e) => onChange(e)}
			/>
			{/**required if variation_type is not empty */}
			<div className="newProduct__Main__buttons">
				<Button type="submit" style={saveButtonStyle} text="Сохранить" />
				<Button
					type="button"
					style={variationButtonStyle}
					text="Создать вариацию"
					onClick={() => onCreateVariation(props.mode)}
				/>
				<Button
					type="button"
					style={nextButtonStyle}
					text="Next"
					onClick={onClickNextButton}
				/>
			</div>
			<Alert
				style={{
					left: '50%',
					transform: 'translateX(-50%)',
					bottom: '2rem',
				}}
			/>
		</form>
	)
}

const mapStateToProps = (state) => {
	return {
		data: state.product,
		id: state.itemType.id,
		isEditing: state.editingProduct.isEditing,
		editingProduct: state.editingProduct.editingProduct,
		prev: state.prevProduct,
	}
}

export default connect(mapStateToProps, {
	setMain,
	setDescription,
	setSizes,
	setPhotos,
	createProduct,
	toggleEditing,
	clearEditing,
	setMainAndCreate,
	clearItemType,
	setErrorAlert,
	setId,
})(Main)

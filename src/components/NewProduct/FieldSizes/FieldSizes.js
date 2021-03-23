import React, { useState } from 'react'
import { connect } from 'react-redux'
import './FieldSizes.scss'
import InputBlock from '../InputBlock/InputBlock'
import InputBlockSelect from '../InputBlockSelect/InputBlockSelect'
import Button from '../FieldMain/Button/Button'
import { setSizes, setSizesAndCreate } from '../../../actions/product'
import Alert from '../../Alert/Alert'
import { editItem, setEditingDimensions } from '../../../actions/editingProduct'
import { styleButton } from './FieldSizes.styles'
import {
	initialState,
	labels,
	names_size,
	names_units,
	types,
	options_size,
	options_weigth,
} from './FieldSizes.config'

const FieldSizes = (props) => {
	const [data, setData] = useState({
		item_weight: props.data.item_weight || undefined,
		item_weight_mu: props.data.item_weight_mu || 'LB',

		package_weight: props.data.package_weight || undefined,
		package_weight_mu: props.data.package_weight_mu || 'LB',

		package_width: props.data.package_width || undefined,
		package_width_mu: props.data.package_width_mu || 'FT',

		package_length: props.data.package_length || undefined,
		package_length_mu: props.data.package_length_mu || 'FT',

		package_height: props.data.package_height || undefined,
		package_height_mu: props.data.package_height_mu || 'FT',
	})

	const [editingData, setEditingData] = useState({
		item_weight: props.dimensions.item_weight || undefined,
		item_weight_mu: props.dimensions.item_weight_mu || 'LB',

		package_weight: props.dimensions.package_weight || undefined,
		package_weight_mu: props.dimensions.package_weight_mu || 'LB',

		package_width: props.dimensions.package_width || undefined,
		package_width_mu: props.dimensions.package_width_mu || 'FT',

		package_length: props.dimensions.package_length || undefined,
		package_length_mu: props.dimensions.package_length_mu || 'FT',

		package_height: props.dimensions.package_height || undefined,
		package_height_mu: props.dimensions.package_height_mu || 'FT',
	})

	const isCreating = props.mode === 'Creating' || false

	const onChange = (e) => {
		if (isCreating) {
			setData({ ...data, [e.target.name]: e.target.value })
		} else {
			setEditingData({ ...editingData, [e.target.name]: e.target.value })
		}
	}

	const inputList = labels.map((e, i) => {
		return (
			<InputBlock
				key={`newProduct__fieldSizes__input__${i}`}
				label={e}
				inputWidth="36.7rem"
				name={names_size[i]}
				value={isCreating ? data[names_size[i]] : editingData[names_size[i]]}
				onChange={(e) => onChange(e)}
			/>
		)
	})

	const onSubmit = async (e) => {
		e.preventDefault()
		const newData = {
			...props.product,
			description: props.product.description,
			photos: props.product.photos,
			dimensions: data,
		}
		const newDataEditing = {
			...props.editingProduct,
			description: props.editingData?.description,
			photos: props.editingData?.photos,
			dimensions: editingData,
		}

		if (props.mode === 'Creating') {
			await props.setSizesAndCreate(newData, props.id, props.products)
		} else if (props.mode === 'Editing') {
			await props.editItem(props.editingProduct, newDataEditing)
		}
		setData(initialState)
		setEditingData(initialState)
	}

	const onClickNextButton = () => {
		isCreating
			? props.setSizes(data)
			: props.setEditingDimensions(editingData, props.editingProduct.id)
		props.onClickToStart()
	}

	const inputSelectList = types.map((e, i) => {
		let options
		e === 'size' ? (options = options_size) : (options = options_weigth)

		return (
			<InputBlockSelect
				key={`newProduct__fieldSizes__inputSelect__${i}`}
				options={options}
				inputWidth="13.5rem"
				disabled="disabled"
				name={names_units[i]}
				value={isCreating ? data[names_units[i]] : editingData[names_units[i]]}
				onChange={(e) => onChange(e)}
			/>
		)
	})

	return (
		<form onSubmit={(e) => onSubmit(e)} className="newProduct__sizes">
			<div className="newProduct__sizes__wrapper">
				<div className="newProduct__sizes__left-col">{inputList}</div>
				<div className="newProduct__sizes__right-col">
					<span className="newProduct__sizes__right-col__desc">
						Measure unit
					</span>
					{inputSelectList}
				</div>
			</div>
			<div className="newProduct__sizes__buttons">
				<Button type="submit" text="Сохранить" style={styleButton} />
				<Button
					type="button"
					text="To start"
					style={styleButton}
					onClick={onClickNextButton}
				/>
			</div>
			<Alert
				style={{
					right: '3rem',
					bottom: '2rem',
				}}
			/>
		</form>
	)
}

const mapStateToProps = (state) => {
	return {
		dimensions: state.editingProduct.editingProduct.dimensions,
		products: state.productsList,
		id: state.itemType.id,
		data: state.product.dimensions,
		editingProduct: state.editingProduct.editingProduct,
		product: state.product,
	}
}

export default connect(mapStateToProps, {
	setSizes,
	setSizesAndCreate,
	editItem,
	setEditingDimensions,
})(FieldSizes)

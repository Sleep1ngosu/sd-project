import React, { useState } from 'react'
import { connect } from 'react-redux'
import './FieldDescription.scss'
import Button from '../FieldMain/Button/Button'
import {
	setDescription,
	setDescriptionAndCreate,
} from '../../../actions/product'
import TextArea from '../TextArea/TextArea'
import {
	editItem,
	setEditingDescription,
} from '../../../actions/editingProduct'
import Alert from '../../Alert/Alert'
import { DescButtonStyle } from './FieldDescription.styles'
import {
	labels,
	names,
	maxLength,
	height,
	initialState,
} from './FieldDescription.config'

const FieldDescription = (props) => {
	const [data, setData] = useState({
		title: props.data.title || '',
		brand: props.data.brand || '',
		description: props.data.description || '',
		bullet_1: props.data.bullet_1 || '',
		bullet_2: props.data.bullet_2 || '',
		bullet_3: props.data.bullet_3 || '',
		bullet_4: props.data.bullet_4 || '',
		bullet_5: props.data.bullet_5 || '',
		manufacturer: props.data.manufacturer || '',
		search_terms: props.data.search_terms || '',
	})

	const [editingData, setEditingData] = useState({
		title: props.description.title || '',
		brand: props.description.brand || '',
		description: props.description.description || '',
		bullet_1: props.description.bullet_1 || '',
		bullet_2: props.description.bullet_2 || '',
		bullet_3: props.description.bullet_3 || '',
		bullet_4: props.description.bullet_4 || '',
		bullet_5: props.description.bullet_5 || '',
		manufacturer: props.description.manufacturer || '',
		search_terms: props.description.search_terms || '',
	})

	const isCreating = props.mode === 'Creating' || false

	let formStyle = {
		paddingTop: props.paddingTop,
		paddingBottom: '10rem',
	}

	const onChange = (e) => {
		if (isCreating) {
			setData({ ...data, [e.target.name]: e.target.value })
		} else {
			setEditingData({ ...editingData, [e.target.name]: e.target.value })
		}
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		const newData = {
			...props.product,
			description: data,
			dimensions: props.product.dimensions,
			photos: props.product.photos,
		}
		const newDataEditing = {
			...props.editingProduct,
			description: editingData,
			dimensions: props.editingProduct?.dimensions,
			photos: props.editingProduct?.photos,
		}
		if (props.mode === 'Creating') {
			await props.setDescriptionAndCreate(newData, props.id, props.products)
		} else if (props.mode === 'Editing') {
			await props.editItem(props.editingProduct, newDataEditing)
		}
		setData(initialState)
		setEditingData(initialState)
	}

	const onClickNextButton = () => {
		isCreating
			? props.setDescription(data)
			: props.setEditingDescription(editingData, props.editingProduct.id)
		props.onClickNextField()
	}

	let descriptionList = labels.map((e, i) => {
		return (
			<TextArea
				key={`newProduct__fieldMain__descriptionLabel__${i}`}
				width="92rem"
				type="text"
				label={e}
				name={names[i]}
				value={isCreating ? data[names[i]] : editingData[names[i]]}
				widthBlock="104.6rem"
				heightBlock={height[i]}
				inputWidth="92rem"
				marginTop="2.9rem"
				max={maxLength[i]}
				onChange={(e) => onChange(e)}
			/>
		)
	})

	return (
		<form
			onSubmit={(e) => onSubmit(e)}
			style={formStyle}
			className="newProduct__Main"
		>
			{descriptionList}
			<div className="description__buttons">
				<Button type="submit" style={DescButtonStyle} text="Сохранить" />
				<Button
					type="button"
					style={DescButtonStyle}
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
		product: state.product,
		data: state.product.description,
		description: state.editingProduct.editingProduct.description,
		id: state.itemType.id,
		products: state.productsList,
		editingProduct: state.editingProduct.editingProduct,
	}
}

export default connect(mapStateToProps, {
	setDescription,
	setDescriptionAndCreate,
	editItem,
	setEditingDescription,
})(FieldDescription)

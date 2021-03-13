import React, { useState } from 'react'
import { connect } from 'react-redux'
import './FieldDescription.scss'
import Button from '../FieldMain/Button/Button'
import InputBlock from '../InputBlock/InputBlock'
import arrays from '../../../variables/arrays'
import {
	setDescription,
	setDescriptionAndCreate,
} from '../../../actions/product'
import TextArea from '../TextArea/TextArea'
import { editItem } from '../../../actions/editingProduct'
import Alert from '../../Alert/Alert'

const FieldDescription = (props) => {
	let [data, setData] = useState({
		title: props.description.title || props.data.description.title || '',
		brand: props.description.brand || props.data.description.brand || '',
		description:
			props.description.description || props.data.description.description || '',
		bullet_1:
			props.description.bullet_1 || props.data.description.bullet_1 || '',
		bullet_2:
			props.description.bullet_2 || props.data.description.bullet_2 || '',
		bullet_3:
			props.description.bullet_3 || props.data.description.bullet_3 || '',
		bullet_4:
			props.description.bullet_4 || props.data.description.bullet_4 || '',
		bullet_5:
			props.description.bullet_5 || props.data.description.bullet_5 || '',
		manufacturer:
			props.description.manufacturer ||
			props.data.description.manufacturer ||
			'',
		search_terms:
			props.description.search_terms ||
			props.data.description.search_terms ||
			'',
	})

	let formStyle = {
		paddingTop: props.paddingTop,
		paddingBottom: '10rem',
	}

	let DescButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
	}

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		const newData = {
			...props.data,
			description: data,
			dimensions: props.data.dimensions,
			photos: props.data.photos,
		}
		if (props.mode === 'Creating') {
			await props.setDescriptionAndCreate(newData, props.id, props.products)
		} else if (props.mode === 'Editing') {
			await editItem(props.editingProduct, newData)
		}
	}

	const onClickNextButton = () => {
		props.setDescription(data)
		props.onClickNextField()
	}

	let descriptionList = arrays.newProductMain.descriptionField.labels.map(
		(e, i) => {
			return (
				<TextArea
					key={`newProduct__fieldMain__descriptionLabel__${i}`}
					width="92rem"
					type="text"
					label={e}
					name={arrays.newProductMain.descriptionField.names[i]}
					value={data[arrays.newProductMain.descriptionField.names[i]]}
					widthBlock="104.6rem"
					heightBlock={arrays.newProductMain.descriptionField.height[i]}
					inputWidth="92rem"
					marginTop="2.9rem"
					max={arrays.newProductMain.descriptionField.max[i]}
					onChange={(e) => onChange(e)}
				/>
			)
		}
	)

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
		data: state.product,
		description: state.editingProduct.editingProduct.description,
		id: state.itemType.id,
		products: state.productsList,
		editingProduct: state.editingProduct.editingProduct,
	}
}

export default connect(mapStateToProps, {
	setDescription,
	setDescriptionAndCreate,
})(FieldDescription)

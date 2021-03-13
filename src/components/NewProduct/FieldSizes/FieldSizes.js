import React, { useState } from 'react'
import { connect } from 'react-redux'
import './FieldSizes.scss'
import arrays from '../../../variables/arrays'
import InputBlock from '../InputBlock/InputBlock'
import InputBlockSelect from '../InputBlockSelect/InputBlockSelect'
import Button from '../FieldMain/Button/Button'
import { setSizes, setSizesAndCreate } from '../../../actions/product'
import Alert from '../../Alert/Alert'
import { editItem } from '../../../actions/editingProduct'

const FieldSizes = (props) => {
	let [data, setData] = useState({
		item_weight:
			props.dimensions.item_weight ||
			props.data.dimensions.item_weight ||
			undefined,
		item_weight_mu:
			props.dimensions.item_weight_mu ||
			props.data.dimensions.item_weight_mu ||
			'LB',

		package_weight:
			props.dimensions.package_weight ||
			props.data.dimensions.package_weight ||
			undefined,
		package_weight_mu:
			props.dimensions.package_weight_mu ||
			props.data.dimensions.package_weight_mu ||
			'LB',

		package_width:
			props.dimensions.package_width ||
			props.data.dimensions.package_width ||
			undefined,
		package_width_mu:
			props.dimensions.package_width_mu ||
			props.data.dimensions.package_width_mu ||
			'FT',

		package_length:
			props.dimensions.package_length ||
			props.data.dimensions.package_length ||
			undefined,
		package_length_mu:
			props.dimensions.package_length_mu ||
			props.data.dimensions.package_length_mu ||
			'FT',

		package_height:
			props.dimensions.package_height ||
			props.data.dimensions.package_height ||
			undefined,
		package_height_mu:
			props.dimensions.package_height_mu ||
			props.data.package_height_mu ||
			'FT',
	})

	console.log(props.dimensions)

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const inputList = arrays.newProductMain.sizesField.labels.map((e, i) => {
		return (
			<InputBlock
				key={`newProduct__fieldSizes__input__${i}`}
				label={e}
				inputWidth="36.7rem"
				name={arrays.newProductMain.sizesField.names_size[i]}
				value={data[arrays.newProductMain.sizesField.names_size[i]]}
				onChange={(e) => onChange(e)}
			/>
		)
	})

	const onSubmit = async (e) => {
		e.preventDefault()
		const newData = {
			...props.data,
			description: props.data.description,
			photos: props.data.photos,
			dimensions: data,
		}

		if (props.mode === 'Creating') {
			await props.setSizesAndCreate(newData, props.id, props.products)
		} else if (props.mode === 'Editing') {
			await editItem(props.editingProduct, newData)
		}
	}

	const onClickNextButton = () => {
		props.setSizes(data)
		props.onClickToStart()
	}

	const inputSelectList = arrays.newProductMain.sizesField.types.map((e, i) => {
		let options
		e === 'size'
			? (options = arrays.newProductMain.sizesField.options.size)
			: (options = arrays.newProductMain.sizesField.options.weight)

		return (
			<InputBlockSelect
				key={`newProduct__fieldSizes__inputSelect__${i}`}
				options={options}
				inputWidth="13.5rem"
				disabled="disabled"
				name={arrays.newProductMain.sizesField.names_units[i]}
				value={data[arrays.newProductMain.sizesField.names_units[i]]}
				onChange={(e) => onChange(e)}
			/>
		)
	})

	let styleButton = {
		width: '14rem',
		height: '5rem',
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
	}

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
		data: state.product,
		editingProduct: state.editingProduct.editingProduct,
	}
}

export default connect(mapStateToProps, { setSizes, setSizesAndCreate })(
	FieldSizes
)

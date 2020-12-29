import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import './FieldMain.scss'
import InputBlock from '../InputBlock/InputBlock'
import arrays from '../../../variables/arrays'
// import Input from './InputBlock/Input/Input'
import Button from './Button/Button'
import Parent from './Parent/Parent'
import ItemType from './ItemType/ItemType'
import SKU from './SKU/SKU'
import InputBlockSelect from '../InputBlockSelect/InputBlockSelect'
import CreateDate from './CreateDate/CreateDate'
import LaunchDate from './LaunchDate/LaunchDate'
import VariationText from './VariationText/VariationText'
import { setMain } from '../../../actions/product'

const Main = (props) => {
	let [data, setData] = useState({
		is_parent: undefined,
		parent_id: undefined,
		variation_type: undefined,
		variation_text: undefined,
		item_type: '',
		sku: '',
		sp_id_type: 'UPC',
		sp_id_value: undefined,
		price: '0.00',
		quantity: 0,
		battery: 'NO',
		dangerous: 'Not Applicable',
	})

	const {
		is_parent,
		parent_id,
		variation_type,
		variation_text,
		item_type,
		sku,
		sp_id_type,
		sp_id_value,
		price,
		quantity,
		battery,
		dangerous,
	} = data

	let MainLeftButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
	}

	let MainRightButtonStyle = {
		border: '.3rem solid #FFBA0A',
		color: '#FFBA0A',
		width: '20rem',
		backgroundColor: 'white',
	}

	let formStyle = {
		height: props.height,
		paddingTop: props.paddingTop,
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(data)
		props.setMain(data)
	}

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	return (
		<form
			autoComplete="off"
			onSubmit={(e) => onSubmit(e)}
			style={formStyle}
			className="newProduct__Main"
		>
			<Parent name="parent_id" value={parent_id} />
			{/**not required */}
			<ItemType
				name="item_type"
				value={item_type}
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
				value={sku}
				onChange={(e) => onChange(e)}
				required={true}
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
			/>
			{/**required if variation_type is not empty */}
			<div className="newProduct__Main__buttons">
				<Button
					type="submit"
					style={MainLeftButtonStyle}
					text="Сохранить"
				/>
				<Button style={MainRightButtonStyle} text="Создать вариацию" />
			</div>
		</form>
	)
}

export default connect(null, { setMain })(Main)

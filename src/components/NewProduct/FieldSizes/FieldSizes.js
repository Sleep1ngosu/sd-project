import React, { useState } from 'react'
import { connect } from 'react-redux'
import './FieldSizes.scss'
import arrays from '../../../variables/arrays'
import InputBlock from '../InputBlock/InputBlock'
import InputBlockSelect from '../InputBlockSelect/InputBlockSelect'
import Button from '../FieldMain/Button/Button'
import { setSizes } from '../../../actions/product'

const FieldSizes = (props) => {
	let [data, setData] = useState({
		item_weight: undefined,
		item_weight_mu: undefined,
		package_weight: undefined,
		package_weight_mu: undefined,
		package_width: undefined,
		package_width_mu: undefined,
		package_length: undefined,
		package_length_mu: undefined,
		package_height: undefined,
		package_height_mu: undefined,
	})

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

	const onSubmit = (e) => {
		e.preventDefault()
		props.setSizes(data)
	}

	const inputSelectList = arrays.newProductMain.sizesField.types.map(
		(e, i) => {
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
					value={
						data[arrays.newProductMain.sizesField.names_units[i]]
					}
					onChange={(e) => onChange(e)}
				/>
			)
		}
	)

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
			<div className="newProduct__sizes__footer">
				<Button type="submit" text="Сохранить" style={styleButton} />
			</div>
		</form>
	)
}

export default connect(null, { setSizes })(FieldSizes)

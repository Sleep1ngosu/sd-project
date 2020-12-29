import React from 'react'
import './FieldSizes.scss'
import arrays from '../../../variables/arrays'
import InputBlock from '../InputBlock/InputBlock'
import InputBlockSelect from '../InputBlockSelect/InputBlockSelect'
import Button from '../FieldMain/Button/Button'

const FieldSizes = () => {
	const inputList = arrays.newProductMain.sizesField.labels.map((e, i) => {
		return (
			<InputBlock
				key={`newProduct__fieldSizes__input__${i}`}
				label={e}
				inputWidth="36.7rem"
			/>
		)
	})

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
		<form className="newProduct__sizes">
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
				<Button text="Сохранить" style={styleButton} />
			</div>
		</form>
	)
}

export default FieldSizes

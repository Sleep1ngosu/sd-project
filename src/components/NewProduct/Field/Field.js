import React from 'react'
import './Field.scss'
import InputBlock from './InputBlock/InputBlock'
import arrays from '../../../variables/arrays'
// import Input from './InputBlock/Input/Input'
import Button from './Button/Button'

const Field = () => {
	let InputBlockList = arrays.newProductMain.labels.map((e, i) => {
		return (
			<InputBlock
				type="text"
				key={`newProduct__field__inputBlock__${i}`}
				label={e}
			/>
		)
	})

	let leftButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
	}

	let rightButtonStyle = {
		border: '.3rem solid #FFBA0A',
		color: '#FFBA0A',
		width: '20rem',
		backgroundColor: 'white',
	}

	return (
		<form className="newProduct__field">
			{InputBlockList}
			<div className="newProduct__field__buttons">
				<Button style={leftButtonStyle} text="Сохранить" />
				<Button style={rightButtonStyle} text="Создать вариацию" />
			</div>
		</form>
	)
}

export default Field

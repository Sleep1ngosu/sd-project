import React, { useState } from 'react'
import './FieldPhoto.scss'
import InputBlock from '../InputBlock/InputBlock'
import InputBlockSelect from '../InputBlockSelect/InputBlockSelect'
import arrays from '../../../variables/arrays'
import AddPhotoIcon from '../../../assets/icons/AddPhotoIcon.png'
import Button from '../FieldMain/Button/Button'
import AddImage from './AddImage/AddImage'

const FieldPhoto = (props) => {
	let formStyle = {
		height: props.height,
		paddingTop: props.paddingTop,
	}
	let [counter, setCounter] = useState(1)
	let [array, setArray] = useState([counter])

	let ButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
	}

	let addPhotoList = array.map((e) => {
		return <AddImage key={`fieldPhoto__addImage__${e - 1}`} />
	})

	const onClickAdd = (e) => {
		e.preventDefault()
		let arr = array
		arr.push(counter + 1)
		setArray(arr)
		setCounter(counter + 1)
	}

	return (
		<form style={formStyle} className="newProduct__fieldPhoto">
			{addPhotoList}

			<div className="newProduct__fieldPhoto__buttons">
				<Button
					onClick={(e) => onClickAdd(e)}
					style={ButtonStyle}
					text="Добавить"
				/>
				<Button style={ButtonStyle} text="Сохранить" />
			</div>
		</form>
	)
}

export default FieldPhoto

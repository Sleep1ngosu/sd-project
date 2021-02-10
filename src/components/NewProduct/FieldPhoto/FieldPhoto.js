import React, { useState } from 'react'
import { connect } from 'react-redux'
import './FieldPhoto.scss'
import InputBlock from '../InputBlock/InputBlock'
import InputBlockSelect from '../InputBlockSelect/InputBlockSelect'
import arrays from '../../../variables/arrays'
import AddPhotoIcon from '../../../assets/icons/AddPhotoIcon.png'
import Button from '../FieldMain/Button/Button'
import AddImage from './AddImage/AddImage'
import { setPhotos } from '../../../actions/product'

const FieldPhoto = (props) => {
	let formStyle = {
		height: props.height,
		paddingTop: props.paddingTop,
	}
	let [counter, setCounter] = useState(1)
	let [array, setArray] = useState([counter])
	let [data, setData] = useState([
		{
			id: 1,
			photo_type: '',
			photo_path: '',
		},
	])
	let [activePhotoAdd, setActivePhotoAdd] = useState(undefined)

	let ButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
	}

	const onChange = (e, i) => {
		let arr = []
		data.forEach((obj, index) => {
			if (i === index) {
				arr.push({ ...obj, [e.target.name]: e.target.value })
			} else {
				arr.push({ ...obj })
			}
		})
		setData(arr)
	}

	const onClickAdd = (e) => {
		e.preventDefault()
		let arr = array
		arr.push(counter + 1)
		setArray(arr)
		setCounter(counter + 1)
		let copyArr = data
		copyArr.push({ id: counter + 1, photo_type: '', photo_path: '' })
		setData(copyArr)
	}

	const onClickPhotoAdd = (e, i) => {
		e.preventDefault()
		setActivePhotoAdd(i)
	}

	const onClosePhotoAdd = (e) => {
		e.preventDefault()
		setActivePhotoAdd(undefined)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		props.setPhotos(data)
	}

	let addPhotoList = array.map((e) => {
		return (
			<AddImage
				onChange={(e, i) => onChange(e, i)}
				photoTypeName={`photo_type`}
				photoPathName={`photo_path`}
				value={data[e - 1]}
				index={e - 1}
				key={`fieldPhoto__addImage__${e - 1}`}
				active={activePhotoAdd}
				onClick={(e, i) => onClickPhotoAdd(e, i)}
				onClose={(e) => onClosePhotoAdd(e)}
			/>
		)
	})

	return (
		<form
			onSubmit={(e) => onSubmit(e)}
			style={formStyle}
			className="newProduct__fieldPhoto"
		>
			{addPhotoList}

			<div className="newProduct__fieldPhoto__buttons">
				<Button
					onClick={(e) => onClickAdd(e)}
					style={ButtonStyle}
					text="Добавить"
				/>
				<Button type="submit" style={ButtonStyle} text="Сохранить" />
			</div>
		</form>
	)
}

export default connect(null, { setPhotos })(FieldPhoto)

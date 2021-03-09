import React, { useState } from 'react'
import { connect } from 'react-redux'
import './FieldPhoto.scss'
import Button from '../FieldMain/Button/Button'
import AddImage from './AddImage/AddImage'
import { setPhotos } from '../../../actions/product'
import Alert from '../../Alert/Alert'

import uuid from 'react-uuid'

const FieldPhoto = (props) => {
	let formStyle = {
		height: props.height,
		paddingTop: props.paddingTop,
	}
	let [data, setData] = useState(
		props.photos.length
			? props.photos
			: [
					{
						id_key: 1,
						image_type: 'Main',
						image: '',
						id_client: uuid(),
					},
			  ]
	)
	let counter = data.length
	let [activePhotoAdd, setActivePhotoAdd] = useState(undefined)

	let ButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
	}

	const onChange = (e, id) => {
		let arr = []
		data.forEach((obj) => {
			if (id === obj.id_client) {
				arr.push({ ...obj, [e.target.name]: e.target.value })
			} else {
				arr.push({ ...obj })
			}
		})
		setData(arr)
	}

	const onClickAdd = (e) => {
		e.preventDefault()
		let newArray = []
		data.forEach((object) => newArray.push(object))
		newArray.push({
			id_key: counter + 1,
			image_type: 'Main',
			image: '',
			id_client: uuid(),
		})
		setData(newArray)
	}

	const onClickPhotoAdd = (e, id) => {
		e.preventDefault()
		setActivePhotoAdd(id)
	}

	const onClosePhotoAdd = (e) => {
		e.preventDefault()
		setActivePhotoAdd(undefined)
	}

	const onChangeFile = (e) => {
		const newData = [...data]
		let file = e.target.files[0]
		if (file) {
			let reader = new FileReader()
			reader.onloadend = () => {
				newData.forEach((object, index) => {
					if (object.id_client === e.target.id) {
						newData[index].image = reader.result.split(',')[1]
						setData([...newData])
					}
				})
			}
			reader.readAsDataURL(file)
		}
		setActivePhotoAdd(undefined)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		props.setPhotos(data)
	}

	const onRemove = (_, id) => {
		if (data.length > 1) {
			const newArray = data.filter((object) => object.id_client !== id)
			setData(newArray)
		}
	}

	let addPhotoList = data.map((e) => {
		return (
			<AddImage
				id={e.id_client}
				onChange={(e, i) => onChange(e, i)}
				photoTypeName={`image_type`}
				photoPathName={`photo_path`}
				value={e}
				index={e.id_key - 1}
				key={`fieldPhoto__addImage__${e.id_client}`}
				active={activePhotoAdd}
				onClick={(e, i) => onClickPhotoAdd(e, i)}
				onClose={(e) => onClosePhotoAdd(e)}
				onRemove={onRemove}
				id_client={e.id_client}
				onChangeFile={(e) => onChangeFile(e)}
				image={e}
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
		photos: state.editingProduct.editingProduct.photos,
	}
}

export default connect(mapStateToProps, { setPhotos })(FieldPhoto)

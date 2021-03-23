import React, { useRef, useState } from 'react'
import './AddImage.scss'
import InputBlockSelect from '../../InputBlockSelect/InputBlockSelect'
import AddPhotoIcon from '../../../../assets/icons/AddPhotoIcon.png'
import LoadPhoto from '../LoadPhoto/LoadPhoto'
import closeIcon from '../../../../assets/icons/closeIcon.png'
import { options } from './AddImage.config'

const AddImage = (props) => {
	let addPhotoStyle

	let [file, setFile] = useState(props.image.image || '')

	if (props.id === props.active) {
		addPhotoStyle = { display: 'block' }
	} else {
		addPhotoStyle = { display: 'none' }
	}

	const onChangeFile = (e) => {
		const file = e.target.files[0]
		const image = URL.createObjectURL(file)
		setFile(image)
		props.setActivePhotoAdd(undefined)
		props.onChangeFile(e)
	}

	console.log(file)

	return (
		<div className="newProduct__fieldPhoto__wrapper">
			<div className="newProduct__fieldPhoto__input">
				<InputBlockSelect
					label="Photo type"
					options={options}
					widthBlock="91.6rem"
					inputWidth="81.1rem"
					name={props.photoTypeName}
					value={props.value.image_type}
					onChange={(e) => props.onChange(e, props.image.id_client)}
					disabled="disabled"
				/>
				<div className="file">
					<div className="label">File status: </div>
					<div className="filename">{!file ? 'Not uploaded' : 'Uploaded'}</div>
				</div>
			</div>
			<div className="newProduct__fieldPhoto__addPhotoIcon__wrapper">
				<div className="newProduct__fieldPhoto__addPhotoIcon">
					<div
						onClick={(e) => props.onClick(e, props.image.id_client)}
						className="newProduct__fieldPhoto__addPhotoIcon__icon"
					>
						{file ? (
							<img className="image" src={file} alt="photo" />
						) : (
							<img className="image" src={AddPhotoIcon} alt="add photo icon" />
						)}
					</div>
					<LoadPhoto
						onChange={onChangeFile}
						style={addPhotoStyle}
						onClose={(e) => props.onClose(e)}
						id={props.id}
					/>
				</div>
			</div>
			<div className="newProduct__fieldPhoto__remove">
				<img
					onClick={(e) => props.onRemove(e, props.id_client)}
					className="remove-icon"
					src={closeIcon}
					alt="remove icon"
				/>
			</div>
			<div className="newProduct__fieldPhoto__horizontal"></div>
		</div>
	)
}

export default AddImage

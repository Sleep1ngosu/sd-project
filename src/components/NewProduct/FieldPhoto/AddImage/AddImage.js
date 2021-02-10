import React, { useState } from 'react'
import './AddImage.scss'
import InputBlock from '../../InputBlock/InputBlock'
import InputBlockSelect from '../../InputBlockSelect/InputBlockSelect'
import arrays from '../../../../variables/arrays'
import AddPhotoIcon from '../../../../assets/icons/AddPhotoIcon.png'
import LoadPhoto from '../LoadPhoto/LoadPhoto'

const AddImage = (props) => {
	let addPhotoStyle

	if (props.index === props.active) {
		addPhotoStyle = { display: 'block' }
	} else {
		addPhotoStyle = { display: 'none' }
	}

	return (
		<div className="newProduct__fieldPhoto__wrapper">
			<div className="newProduct__fieldPhoto__input">
				<InputBlockSelect
					label="Photo type"
					options={arrays.newProductMain.photoField.photoType.options}
					widthBlock="91.6rem"
					inputWidth="81.1rem"
					name={props.photoTypeName}
					value={props.value.photo_type}
					onChange={(e) => props.onChange(e, props.index)}
					disabled="disabled"
				/>
				<InputBlock
					label="Photo path"
					widthBlock="91.6rem"
					inputWidth="81.1rem"
					name={props.photoPathName}
					value={props.value.photo_path}
					onChange={(e) => props.onChange(e, props.index)}
					// marginTop="1.5rem"
				/>
			</div>
			<div className="newProduct__fieldPhoto__addPhotoIcon__wrapper">
				<div className="newProduct__fieldPhoto__addPhotoIcon">
					<div
						onClick={(e) => props.onClick(e, props.index)}
						className="newProduct__fieldPhoto__addPhotoIcon__icon"
					>
						<img src={AddPhotoIcon} alt="add photo icon" />
					</div>
					<LoadPhoto
						style={addPhotoStyle}
						onClose={(e) => props.onClose(e)}
					/>
				</div>
			</div>
			<div className="newProduct__fieldPhoto__horizontal"></div>
		</div>
	)
}

export default AddImage

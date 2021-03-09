import React from 'react'
import './AddImage.scss'
import InputBlockSelect from '../../InputBlockSelect/InputBlockSelect'
import arrays from '../../../../variables/arrays'
import AddPhotoIcon from '../../../../assets/icons/AddPhotoIcon.png'
import LoadPhoto from '../LoadPhoto/LoadPhoto'
import closeIcon from '../../../../assets/icons/closeIcon.png'

const AddImage = (props) => {
	let addPhotoStyle

	if (props.id === props.active) {
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
					value={props.value.image_type}
					onChange={(e) => props.onChange(e, props.image.id_client)}
					disabled="disabled"
				/>
				<div className="file">
					<div className="label">File status: </div>
					<div className="filename">
						{!props.image.image ? 'Not uploaded' : 'Uploaded'}
					</div>
				</div>
			</div>
			<div className="newProduct__fieldPhoto__addPhotoIcon__wrapper">
				<div className="newProduct__fieldPhoto__addPhotoIcon">
					<div
						onClick={(e) => props.onClick(e, props.image.id_client)}
						className="newProduct__fieldPhoto__addPhotoIcon__icon"
					>
						<img src={AddPhotoIcon} alt="add photo icon" />
					</div>
					<LoadPhoto
						onChange={props.onChangeFile}
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

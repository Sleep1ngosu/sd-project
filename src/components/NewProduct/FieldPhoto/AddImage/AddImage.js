import React from 'react'
import './AddImage.scss'
import InputBlock from '../../InputBlock/InputBlock'
import InputBlockSelect from '../../InputBlockSelect/InputBlockSelect'
import arrays from '../../../../variables/arrays'
import AddPhotoIcon from '../../../../assets/icons/AddPhotoIcon.png'

const AddImage = () => {
	return (
		<div className="newProduct__fieldPhoto__wrapper">
			<div className="newProduct__fieldPhoto__input">
				<InputBlockSelect
					label="Photo type"
					options={arrays.newProductMain.photoField.photoType.options}
					widthBlock="91.6rem"
					inputWidth="81.1rem"
				/>
				<InputBlock
					label="Photo path"
					widthBlock="91.6rem"
					inputWidth="81.1rem"
					// marginTop="1.5rem"
				/>
			</div>
			<div className="newProduct__fieldPhoto__addPhotoIcon">
				<img src={AddPhotoIcon} alt="add photo icon" />
			</div>
			<div className="newProduct__fieldPhoto__horizontal"></div>
		</div>
	)
}

export default AddImage

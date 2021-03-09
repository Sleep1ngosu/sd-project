import React from 'react'
import './LoadPhoto.scss'
import Button from '../../FieldMain/Button/Button'
import CloseIcon from '@material-ui/icons/Close'

const LoadPhoto = (props) => {
	let buttonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '21.4rem',
	}

	return (
		<div style={props.style} className="loadPhoto__wrapper">
			<div className="loadPhoto">
				<Button
					buttype="image"
					text="Загрузить фото"
					style={buttonStyle}
					onChange={props.onChange}
					id={props.id}
				/>
				<div onClick={(e) => props.onClose(e)} className="loadPhoto__icon">
					<CloseIcon style={{ transform: 'scale(1.4)' }} />
				</div>
			</div>
		</div>
	)
}

export default LoadPhoto

import React from 'react'
import './FieldDescription.scss'
import Button from '../FieldMain/Button/Button'
import InputBlock from '../InputBlock/InputBlock'
import arrays from '../../../variables/arrays'

const FieldDescription = (props) => {
	let formStyle = {
		height: props.height,
		paddingTop: props.paddingTop,
	}

	let DescButtonStyle = {
		backgroundColor: '#FFBA0A',
		border: '.1rem solid #EDB014',
		color: 'white',
		width: '14rem',
		marginLeft: '44.4rem',
		marginTop: '10rem',
	}

	let descriptionList = arrays.newProductMain.descriptionField.labels.map(
		(e, i) => {
			return (
				<InputBlock
					key={`newProduct__fieldMain__descriptionLabel__${i}`}
					width="92rem"
					type="text"
					label={e}
					name={e}
					widthBlock="104.6rem"
					heightBlock={
						arrays.newProductMain.descriptionField.height[i]
					}
					inputWidth="92rem"
					marginTop="2.9rem"
				/>
			)
		}
	)

	return (
		<form style={formStyle} className="newProduct__Main">
			{descriptionList}
			<Button style={DescButtonStyle} text="Сохранить" />
		</form>
	)
}

export default FieldDescription

import React, { useState } from 'react'
import { connect } from 'react-redux'
import './FieldDescription.scss'
import Button from '../FieldMain/Button/Button'
import InputBlock from '../InputBlock/InputBlock'
import arrays from '../../../variables/arrays'
import { setDescription } from '../../../actions/product'
import TextArea from '../TextArea/TextArea'

const FieldDescription = (props) => {
	let [data, setData] = useState({
		title: '',
		brand: '',
		description: '',
		bullet_1: '',
		bullet_2: '',
		bullet_3: '',
		bullet_4: '',
		bullet_5: '',
		manufacturer: '',
	})

	let {
		title,
		brand,
		description,
		bullet_1,
		bullet_2,
		bullet_3,
		bullet_4,
		bullet_5,
		manufacturer,
	} = data

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

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value })
	}

	const onSubmit = (e) => {
		e.preventDefault()
		props.setDescription(data)
	}

	let descriptionList = arrays.newProductMain.descriptionField.labels.map(
		(e, i) => {
			return (
				<TextArea
					key={`newProduct__fieldMain__descriptionLabel__${i}`}
					width="92rem"
					type="text"
					label={e}
					name={arrays.newProductMain.descriptionField.names[i]}
					value={
						data[arrays.newProductMain.descriptionField.names[i]]
					}
					widthBlock="104.6rem"
					heightBlock={
						arrays.newProductMain.descriptionField.height[i]
					}
					inputWidth="92rem"
					marginTop="2.9rem"
					max={arrays.newProductMain.descriptionField.max[i]}
					onChange={(e) => onChange(e)}
				/>
			)
		}
	)

	return (
		<form
			onSubmit={(e) => onSubmit(e)}
			style={formStyle}
			className="newProduct__Main"
		>
			{descriptionList}
			<Button style={DescButtonStyle} text="Сохранить" />
		</form>
	)
}

export default connect(null, { setDescription })(FieldDescription)

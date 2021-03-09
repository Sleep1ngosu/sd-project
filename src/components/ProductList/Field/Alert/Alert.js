import React from 'react'
import './Alert.scss'
import { connect } from 'react-redux'

const Alert = (props) => {
	let style, message
	if (props.responseType === 'success') {
		style = { backgroundColor: 'rgba(172, 239, 140, 0.58)' }
		message = 'Успешно отправлено!'
	} else if (props.responseType === 'error') {
		style = { backgroundColor: 'rgba(255, 66, 66, 0.76)' }
		message = 'Ошибка отправления! Попробуйте снова.'
	} else {
		style = { display: 'none' }
	}

	return (
		<div style={style} className="sendListing__body__alert">
			{message}
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		responseType: state.listing.responseType,
	}
}

export default connect(mapStateToProps, null)(Alert)

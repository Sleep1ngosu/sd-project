import React from 'react'
import './Alert.scss'
import { connect } from 'react-redux'
import closeIcon from '../../assets/icons/closeIcon.png'
import { clearAlert } from '../../actions/alert'

const Alert = (props) => {
	let colorStyle
	if (props.alert.type === 'success') {
		colorStyle = {
			color: 'green',
			border: '.1rem solid green',
		}
	} else if (props.alert.type === 'error') {
		colorStyle = {
			color: 'red',
			border: '.1rem solid red',
		}
	} else if (props.alert.type === 'loading') {
		colorStyle = {
			color: 'black',
			border: 'none',
		}
	}
	const isShow = (props.alert.message && { display: 'block' }) || {
		display: 'none',
	}
	const style = { ...colorStyle, ...isShow, ...props.style }

	const onClose = () => {
		props.clearAlert()
	}

	return (
		<div className="alert__wrapper" style={style}>
			<div className="alert">
				{props.alert.message}
				{props.alert.type !== 'loading' ? (
					<div className="alert__icon">
						<img
							className="alert__icon__icon"
							src={closeIcon}
							alt="close icon"
							onClick={onClose}
						/>
					</div>
				) : null}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		alert: state.alert,
	}
}

export default connect(mapStateToProps, { clearAlert })(Alert)

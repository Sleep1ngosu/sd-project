import React from 'react'
import { connect } from 'react-redux'
import './Blocker.scss'

const Blocker = ({ isActive }) => {
	return <div className={`${(!isActive && 'hide') || ''} Blocker`}></div>
}

const mapStateToProps = (state) => {
	return {
		isActive: state.blocker.isActive,
	}
}

export default connect(mapStateToProps)(Blocker)

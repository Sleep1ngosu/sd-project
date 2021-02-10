import React from 'react'
import './Alert.scss'
import {connect} from 'react-redux'

const Alert = (props) => {
    const colorStyle = props.alert.type === 'success' && { color: 'green' } || { color: 'red' }
    const isShow = props.alert.message && { display: 'block' } || {display: 'none'}
    const style = {...colorStyle, ...isShow}

    return (
        <div style={...style, props.style}>{props.alert.message}</div>
    )
}

const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}

export default connect(mapStateToProps, null)(Alert)
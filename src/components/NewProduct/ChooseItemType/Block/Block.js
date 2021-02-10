import React from 'react'
import './Block.scss'
import { connect } from 'react-redux'
import { setId, toggleItemtype } from '../../../../actions/itemType'

const Block = (props) => {
	const onClick = () => {
		props.setId(props.id)
		props.toggleItemtype()
	}

	return (
		<div onClick={onClick} className="itemTypeBlock">
			<div title={props.keywords} className="itemTypeBlock__keyword">
				{props.keywords}
			</div>
			<div title={props.path} className="itemTypeBlock__path">
				{props.path}
			</div>
			<div title={props.type} className="itemTypeBlock__type">
				{props.type}
			</div>
		</div>
	)
}

export default connect(null, { setId, toggleItemtype })(Block)

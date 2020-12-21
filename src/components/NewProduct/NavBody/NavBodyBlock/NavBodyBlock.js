import React from 'react'
import './NavBodyBlock.scss'

const NavBodyBlock = (props) => {
	let style
	if (props.active === props.index) {
		style = { backgroundColor: '#627aba' }
	}

	return (
		<div
			id={props.index}
			style={style}
			className="newProduct__navBodyBlock__wrapper"
			onClick={props.onClick}
		>
			<span id={props.index} className="newProduct__navBodyBlock__text">
				{props.text}
			</span>
		</div>
	)
}

export default NavBodyBlock

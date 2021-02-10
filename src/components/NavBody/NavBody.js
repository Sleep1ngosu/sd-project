import React from 'react'
import './NavBody.scss'
import NavBodyBlock from './NavBodyBlock/NavBodyBlock'

const NavBody = (props) => {
	let navBodyBlockList

	let style = {
		width: props.width,
	}

	if (props.titles.length) {
		navBodyBlockList = props.titles.map((e, i) => {
			return (
				<NavBodyBlock
					active={+props.active}
					text={e}
					key={`newProduct__navBodyBlock__${i}`}
					index={+i}
					onClick={props.onClick}
				/>
			)
		})
	} else {
		navBodyBlockList = null
	}

	return (
		<div style={style} className="newProduct__navBody">
			{navBodyBlockList}
		</div>
	)
}

export default NavBody

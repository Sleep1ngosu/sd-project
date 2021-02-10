import React from 'react'
import './NavLinks.scss'
import { Link } from 'react-router-dom'

function NavLinks(props) {
	let style = {
		width: props.width,
	}

	return (
		<div className="newProduct__nav__links">
			<div className="newProduct__nav__links__main">
				<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
					<span className="newProduct__nav__links__main__text">
						Главная
					</span>
				</Link>
			</div>
			<div
				style={style}
				className="newProduct__nav__links__createProduct"
			>
				{props.text}
			</div>
		</div>
	)
}

export default NavLinks

import React from 'react'
import './NavLinks.scss'
import { Link } from 'react-router-dom'

function NavLinks() {
	return (
		<div className="newProduct__nav__links">
			<div className="newProduct__nav__links__main">
				<Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
					<span className="newProduct__nav__links__main__text">
						Главная
					</span>
				</Link>
			</div>
			<div className="newProduct__nav__links__createProduct">
				Создание товара
			</div>
		</div>
	)
}

export default NavLinks

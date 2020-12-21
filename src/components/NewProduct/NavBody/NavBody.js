import React from 'react'
import './NavBody.scss'
import NavBodyBlock from './NavBodyBlock/NavBodyBlock'

const NavBody = (props) => {
	let titles = ['Основные', 'Описание', 'Изображение', 'Размеры']

	let navBodyBlockList = titles.map((e, i) => {
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

	return <div className="newProduct__navBody">{navBodyBlockList}</div>
}

export default NavBody

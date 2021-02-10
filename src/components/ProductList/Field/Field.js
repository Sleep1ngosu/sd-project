import React, { useState } from 'react'
import './Field.scss'
import Header from './Header/Header'
import Block from './Block/Block'

const Field = (props) => {
	let [settingsIndex, setSettingIndex] = useState(undefined)

	const settingsToggle = (index) => {
		console.log(index)
		if (index === settingsIndex) {
			setSettingIndex(undefined)
		} else {
			setSettingIndex(index)
		}
	}

	let style
	if (props.type === 'product_list') {
		style = { marginTop: '5.1rem' }
	} else if (props.type === 'create_listing') {
		style = { marginTop: '2.6rem' }
	} else if (props.type === 'check_listing') {
		style = { marginTop: '1.6rem' }
	}

	let titles = [
		'10- oz Drinking Glasses Tumblers for Water, Juice, cocktail 10- oz Drinking Glasses Tumblers for Water, Juice, cocktail 10- oz Drinking Glasses Tumblers for Water, Juice, cocktail',
		'10- oz Drinking Glasses Tumblers for Water, Juice, cocktail 10- oz Drinking Glasses Tumblers for Water, Juice, cocktail 10- oz Drinking Glasses Tumblers for Water, Juice, cocktail',
	]

	let SKU = ['10-oz glasses tumblers', '10-oz glasses tumblers']

	let createDate = ['24.11.2020', '24.11.2020']
	let launchDate = ['24.11.2020', '24.11.2020']

	let blocksList = titles.map((e, i) => {
		return (
			<Block
				key={`productList__field__${i}`}
				index={i}
				title={e}
				sku={SKU[i]}
				createDate={createDate[i]}
				launchDate={launchDate[i]}
				onClickSettings={(i) => settingsToggle(i)}
				active={settingsIndex}
				type={props.type}
			/>
		)
	})

	for (let i = blocksList.length; i < 8; i++) {
		blocksList.push(
			<Block index={i} key={`productList__field__pushed__${i}`} />
		)
	}

	return (
		<div style={style} className="productList__field__wrapper">
			<Header type={props.type} />
			{blocksList}
		</div>
	)
}

export default Field

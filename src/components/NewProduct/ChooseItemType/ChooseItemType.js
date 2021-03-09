import React, { useState, useEffect } from 'react'
import './ChooseItemType.scss'
import { connect } from 'react-redux'
import { getItemTypes } from '../../../api/getItemTypes'
import Block from './Block/Block'
// import { EmojiPeopleRounded } from '@material-ui/icons'
import { setSearch } from '../../../actions/itemType'

const ChooseItemType = (props) => {
	let style

	const [fetchData, setFetchData] = useState([])
	const [searchData, setSearchData] = useState('')

	// useEffect(() => {
	// 	const fetch = async () => {
	// 		const response = await getItemTypes('')
	// 		setData(response.data)
	// 	}
	// 	fetch()
	// }, [])

	const fetch = async (search) => {
		const response = await getItemTypes(search)
		setFetchData(response.data)
		props.setSearch(searchData)
	}

	const onChange = (e) => {
		setSearchData(e.target.value)
	}

	const itemTypesList = fetchData.map((itemType, index) => {
		return (
			<Block
				key={`itemType__keyword__${index}`}
				keywords={itemType.attr_item_type_keywords}
				path={itemType.path_by_name}
				type={itemType.product_type_definitions}
				id={itemType.id}
			/>
		)
	})

	props.isShow ? (style = { display: 'flex' }) : (style = { display: 'none' })

	return (
		<div style={style} className="newProduct__chooseItemType">
			<div className="newProduct__chooseItemType__header">
				<div className="newProduct__chooseItemType__header__title">
					Выбрать Item Type
				</div>
				<div className="newProduct__chooseItemType__header__searchBar">
					<div className="newProduct__chooseItemType__header__searchBar__search">
						<input
							onChange={(e) => onChange(e)}
							value={searchData}
							className="newProduct__chooseItemType__header__searchBar__search__input"
						></input>
						<button
							type="button"
							onClick={() => fetch(searchData)}
							className="newProduct__chooseItemType__header__searchBar__search__button"
						>
							Поиск
						</button>
					</div>
					<div className="newProduct__chooseItemType__header__searchBar__results">
						{fetchData.length} результатов
					</div>
				</div>
			</div>
			<div className="newProduct__chooseItemType__body">
				<div className="newProduct__chooseItemType__body__header">
					<span className="newProduct__chooseItemType__body__header__title">
						ATTR ITEM TYPE KEEWORDS
					</span>
					<span className="newProduct__chooseItemType__body__header__title">
						PATH BY NAME
					</span>
					<span className="newProduct__chooseItemType__body__header__title">
						PRODUCT TYPE DEFINITIONS
					</span>
				</div>
				<div className="newProduct__chooseItemType__body__blocks">
					{itemTypesList}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isShow: state.itemType.isShow,
	}
}

export default connect(mapStateToProps, { setSearch })(ChooseItemType)

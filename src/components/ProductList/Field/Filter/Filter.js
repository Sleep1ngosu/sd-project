import React from 'react'
import './Filter.scss'
import CrossIcon from '../../../../assets/icons/CrossIcon.png'
import Switch from '@material-ui/core/Switch'
import InputSelectBlock from '../InputSelectBlock/InputSelectBlock'

const Filter = (props) => {
	let array = ['SKU', 'Title', 'Parent', 'Create date', 'Launch date	']

	let inputList = array.map((e, i) => {
		let type
		if (i === 3 || i === 4) {
			type = 'date'
		} else type = 'select'

		return (
			<InputSelectBlock
				disabled={true}
				key={`productList__field__filter__inputBlock__${i}`}
				type={type}
				value={e}
			/>
		)
	})

	let style
	props.isHidden === true
		? (style = { display: 'none' })
		: (style = { display: 'flex' })

	return (
		<div style={style} className="productList__field__filter__wrapper">
			<div className="productList__field__filter">
				<div
					onClick={props.close}
					className="productList__field__filter__closeIcon"
				>
					<img src={CrossIcon} alt="cross icon" />
				</div>
				<div className="productList__field__filter__header">
					<span className="productList__field__filter__header__text">
						Is parent
					</span>
					<div className="productList__field__filter__header__icon">
						<Switch />
					</div>
				</div>
				<div className="productList__field__filter__body">
					{inputList}
				</div>
				<div className="productList__field__filter__footer">
					<button
						type="button"
						className="productList__field__filter__footer__button"
					>
						ОК
					</button>
				</div>
			</div>
		</div>
	)
}

export default Filter

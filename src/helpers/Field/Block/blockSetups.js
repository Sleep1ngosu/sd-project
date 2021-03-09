import MenuIcon from '../../../assets/icons/MenuIcon.png'
import Iconlist from '../../../assets/icons/Iconlist.png'

// setup styles for product_list type of <Field /> component
// setup Block styles
export const productListBlockSetup = (props, settingsIconStyle) => {
	let styleDate = { display: 'flex' }
	let styleWrapper = { gridTemplateColumns: '0.5fr 1fr 1fr 0.5fr' }
	let renderedIcon = (
		<div
			style={settingsIconStyle}
			className="productList__field__block__settings__icon"
			onClick={() => props.onClickSettings(props.index)}
		>
			<img src={MenuIcon} alt="menu icon" />
		</div>
	)

	return { styleDate, styleWrapper, renderedIcon }
}

// setup styles for create_listing type of <Field /> component
//setup Block styles
export const createListingBlockSetup = (addToListing) => {
	let styleDate = { display: 'none' }
	let styleWrapper = {
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gridGap: '10rem',
	}
	let renderedIcon = (
		<div className="productList__field__block__settings__icon">
			<img onClick={addToListing} src={Iconlist} alt="icon list" />
		</div>
	)

	return { styleDate, styleWrapper, renderedIcon }
}

// setup styles for create_listing type of <Field /> component
//setup Block styles
export const checkListingBlockSetup = (props, settingsIconStyle) => {
	let styleDate = { display: 'none' }
	let styleWrapper = {
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gridGap: '10rem',
	}
	let renderedIcon = (
		<div
			style={settingsIconStyle}
			onClick={() => props.onClickSettings(props.index)}
			className="productList__field__block__settings__icon"
		>
			<img src={MenuIcon} alt="icon list" />
		</div>
	)

	return { styleDate, styleWrapper, renderedIcon }
}

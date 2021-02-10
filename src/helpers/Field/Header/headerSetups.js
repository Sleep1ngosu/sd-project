import MenuIcon from '../../../assets/icons/MenuIcon.png'
import Iconlist from '../../../assets/icons/Iconlist.png'
import arrays from '../../../variables/arrays'

// setup Header styles
export const productListHeaderSetup = () => {
	let headerList = arrays.productList.header.values.map((e, i) => {
		return (
			<div
				key={`productList__field__header__element__${i}`}
				className="productList__field__header__element"
			>
				{e}
			</div>
		)
	})
	let styleWrapper = {
		gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 0.5fr',
	}

	return { headerList, styleWrapper }
}

//setup Header styles
export const createListingHeaderSetup = () => {
	let headerList = arrays.createListing.productList.header.values.map(
		(e, i) => {
			return (
				<div
					key={`createListing__productList__field__header__element__${i}`}
					className="productList__field__header__element"
				>
					{e}
				</div>
			)
		}
	)
	let styleWrapper = {
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gridGap: '10rem',
	}

	return { headerList, styleWrapper }
}

// setup Header styles
export const checkListingHeaderSetup = () => {
	let headerList = arrays.createListing.productList.header.values.map(
		(e, i) => {
			return (
				<div
					key={`createListing__productList__field__header__element__${i}`}
					className="productList__field__header__element"
				>
					{e}
				</div>
			)
		}
	)
	let styleWrapper = {
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gridGap: '10rem',
	}

	return { headerList, styleWrapper }
}

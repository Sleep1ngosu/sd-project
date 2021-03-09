import React, { useState } from 'react'
import './ListingSettings.scss'
import { connect } from 'react-redux'
import InputBlockSelect from '../../NewProduct/InputBlockSelect/InputBlockSelect'
import { setMarketplace, setSellername } from '../../../actions/listing'

const ListingSettings = ({
	options,
	setSellername,
	setMarketplace,
	sellername,
	marketplace,
}) => {
	const [data, setData] = useState({
		marketplace: '',
		sellername: '',
	})

	const markets = [],
		sellers = []

	options.markets.forEach((array) => {
		markets.push(array[0])
	})

	options.sellers.forEach((array) => {
		if (array[0]) {
			sellers.push(array[0])
		}
	})

	const onChangeSellername = (e) => {
		setSellername(e.target.value)
	}

	const onChangeMarketplace = (e) => {
		setMarketplace(e.target.value)
	}

	return (
		<div className="createListing__listingSettings__wrapper">
			<InputBlockSelect
				label="SellerName"
				options={sellers}
				widthBlock="49.6rem"
				inputWidth="37rem"
				color="white"
				onChange={(e) => onChangeSellername(e)}
				name="sellername"
				value={sellername}
				disabled="disabled"
			/>
			<InputBlockSelect
				label="MarketPlace"
				options={markets}
				widthBlock="49.6rem"
				inputWidth="37rem"
				color="white"
				marginLeft="6.9rem"
				onChange={(e) => onChangeMarketplace(e)}
				name="marketplace"
				value={marketplace}
				disabled="disabled"
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		options: state.listing.settings,
		sellername: state.listing.sellername,
		marketplace: state.listing.marketplace,
	}
}

export default connect(mapStateToProps, { setMarketplace, setSellername })(
	ListingSettings
)

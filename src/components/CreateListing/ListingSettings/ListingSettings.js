import React from 'react'
import './ListingSettings.scss'
import InputBlockSelect from '../../NewProduct/InputBlockSelect/InputBlockSelect'

const ListingSettings = () => {
	return (
		<div className="createListing__listingSettings__wrapper">
			<InputBlockSelect
				label="SellerName"
				options={['asd']}
				widthBlock="49.6rem"
				inputWidth="37rem"
				color="white"
			/>
			<InputBlockSelect
				label="MarketPlace"
				options={['asd']}
				widthBlock="49.6rem"
				inputWidth="37rem"
				color="white"
				marginLeft="6.9rem"
			/>
		</div>
	)
}

export default ListingSettings

import axios from '../utils/axios'
import {
	ADD_PRODUCT_TO_LISTING,
	REMOVE_PRODUCT_FROM_LISTING,
	CLEAR_LISTING,
	SET_RESPONSE_TYPE,
	CLEAR_RESPONSE_TYPE,
	SET_LISTING_SETTINGS,
	SET_SELLERNAME,
	SET_MARKETPLACE,
} from './types'

export const addProductToListing = (product) => (dispatch) => {
	dispatch({ type: ADD_PRODUCT_TO_LISTING, payload: product })
}

export const removeProductFromListing = (sku) => (dispatch) => {
	dispatch({ type: REMOVE_PRODUCT_FROM_LISTING, payload: sku })
}

export const clearListing = () => (dispatch) => {
	dispatch({ type: CLEAR_LISTING })
}

export const setResponseType = (type) => (dispatch) => {
	dispatch({ type: SET_RESPONSE_TYPE, payload: type })
}

export const clearResponseType = () => (dispatch) => {
	dispatch({ type: CLEAR_RESPONSE_TYPE })
}

export const setSellername = (sellername) => (dispatch) => {
	dispatch({ type: SET_SELLERNAME, payload: sellername })
}

export const setMarketplace = (marketplace) => (dispatch) => {
	dispatch({ type: SET_MARKETPLACE, payload: marketplace })
}

export const setListingSettings = () => async (dispatch) => {
	try {
		const URI = '/listings/stats'
		const response = await axios.get(URI)
		dispatch({ type: SET_LISTING_SETTINGS, payload: response.data })
	} catch (err) {
		console.log(err)
	}
}

export const sendListing = (data) => async (dispatch) => {
	try {
		const URI = 'listings/new_listing'
		const response = await axios.post(URI, data)
		console.log(response)
		dispatch(setResponseType('success'))
		setTimeout(() => {
			dispatch(clearResponseType())
		}, 10000)
	} catch (err) {
		console.log(err.response)
		dispatch(setResponseType('error'))
		setTimeout(() => {
			dispatch(clearResponseType())
		}, 10000)
	}
}

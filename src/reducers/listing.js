import {
	ADD_PRODUCT_TO_LISTING,
	REMOVE_PRODUCT_FROM_LISTING,
	CLEAR_LISTING,
	SET_RESPONSE_TYPE,
	CLEAR_RESPONSE_TYPE,
	SET_LISTING_SETTINGS,
	SET_SELLERNAME,
	SET_MARKETPLACE,
} from '../actions/types'

const initialState = {
	products: [],
	responseType: '',
	settings: {},
	sellername: '',
	marketplace: '',
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT_TO_LISTING: {
			const isConsists = state.products.indexOf(action.payload)
			const newArray = state.products
			if (isConsists === -1) {
				newArray.push(action.payload)
			}
			return {
				...state,
				products: newArray,
			}
		}
		case REMOVE_PRODUCT_FROM_LISTING: {
			return {
				...state,
				products: state.products.filter(
					(product) => product !== action.payload
				),
			}
		}
		case CLEAR_LISTING: {
			return {
				...state,
				products: [],
			}
		}
		case SET_RESPONSE_TYPE: {
			return {
				...state,
				responseType: action.payload,
			}
		}
		case CLEAR_RESPONSE_TYPE: {
			return {
				...state,
				responseType: '',
			}
		}
		case SET_LISTING_SETTINGS: {
			return {
				...state,
				settings: action.payload,
			}
		}
		case SET_SELLERNAME: {
			return {
				...state,
				sellername: action.payload,
			}
		}
		case SET_MARKETPLACE: {
			return {
				...state,
				marketplace: action.payload,
			}
		}
		default:
			return state
	}
}

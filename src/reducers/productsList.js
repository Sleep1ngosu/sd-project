import { SET_PRODUCTS_LIST } from '../actions/types'

const initialState = {}

const ProductsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS_LIST: {
			return action.payload
		}
		default:
			return state
	}
}

export default ProductsListReducer

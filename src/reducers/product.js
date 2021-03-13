import {
	SET_MAIN,
	SET_SIZES,
	SET_DESCRIPTION,
	SET_PHOTOS,
	CLEAR_PRODUCT,
} from '../actions/types'

const initialState = {
	is_parent: '',
	parent_id: '',
	variation_type: '',
	variation_text: '',
	item_type: '',
	sku: '',
	sp_id_type: 'UPC',
	sp_id_value: '',
	price: '0.00',
	quantity: 0,
	battery: 'N',
	dangerous: 'NA',
	description: {},
	dimensions: {},
	photos: [],
}

const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MAIN:
			const {
				is_parent,
				parent_id,
				variation_type,
				variation_text,
				item_type,
				sku,
				sp_id_type,
				sp_id_value,
				price,
				quantity,
				battery,
				dangerous,
			} = action.payload
			return {
				...state,
				is_parent,
				parent_id,
				variation_type,
				variation_text,
				item_type,
				sku,
				sp_id_type,
				sp_id_value,
				price,
				quantity,
				battery,
				dangerous,
			}
		case SET_DESCRIPTION: {
			return {
				...state,
				description: action.payload,
			}
		}
		case SET_SIZES: {
			return {
				...state,
				dimensions: action.payload,
			}
		}
		case SET_PHOTOS: {
			return {
				...state,
				photos: action.payload,
			}
		}
		case CLEAR_PRODUCT: {
			return {
				is_parent: '',
				parent_id: '',
				variation_type: '',
				variation_text: '',
				item_type: '',
				sku: '',
				sp_id_type: 'UPC',
				sp_id_value: '',
				price: '0.00',
				quantity: 0,
				battery: 'N',
				dangerous: 'NA',
				description: {},
				dimensions: {},
				photos: [],
			}
		}
		default:
			return state
	}
}

export default ProductReducer

import {
	SET_MAIN,
	SET_SIZES,
	SET_DESCRIPTION,
	SET_PHOTOS,
} from '../actions/types'

const initialState = {
	pk: '',
	is_parent: undefined,
	parent_id: undefined,
	variation_type: undefined,
	variation_text: undefined,
	item_type: '',
	sku: '',
	sp_id_type: 'UPC',
	sp_id_value: undefined,
	price: '0.00',
	quantity: 0,
	battery: 'N',
	dangerous: 'NA',
	description: {},
	dimensions: {},
	photos: [],
}

export default (state = initialState, action) => {
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
		default:
			return state
	}
}

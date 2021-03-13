import {
	TOGGLE_ITEMTYPE,
	SET_ID,
	SET_SEARCH,
	CLEAR_ITEMTYPE,
} from '../actions/types'

const initialState = {
	isShow: false,
	search: '',
	id: '',
}

const ItemTypeReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_ITEMTYPE: {
			return {
				...state,
				isShow: !state.isShow,
			}
		}
		case SET_ID: {
			return {
				...state,
				id: action.payload,
			}
		}
		case SET_SEARCH: {
			return {
				...state,
				search: action.payload,
			}
		}
		case CLEAR_ITEMTYPE: {
			return {
				...state,
				search: '',
				id: '',
			}
		}
		default:
			return state
	}
}

export default ItemTypeReducer

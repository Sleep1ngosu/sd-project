import { TOGGLE_ITEMTYPE, SET_ID, SET_SEARCH } from '../actions/types'

const initialState = {
	isShow: false,
	search: '',
	id: '',
}

export default (state = initialState, action) => {
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
		default:
			return state
	}
}

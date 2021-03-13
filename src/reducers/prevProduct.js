import { SET_PREV_PRODUCT } from '../actions/types'

const initialState = {}

const PrevProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PREV_PRODUCT: {
			return action.payload
		}
		default:
			return state
	}
}

export default PrevProductReducer

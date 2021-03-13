import { SET_BLOCKER, REMOVE_BLOCKER } from '../actions/types'

const initialState = { isActive: false }

const BlockerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_BLOCKER: {
			return {
				...state,
				isActive: true,
			}
		}
		case REMOVE_BLOCKER: {
			return {
				...state,
				isActive: false,
			}
		}
		default:
			return state
	}
}

export default BlockerReducer

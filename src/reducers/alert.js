import {
	ERROR_ALERT,
	SUCCESS_ALERT,
	CLEAR_ALERT,
	LOADING_ALERT,
} from '../actions/types'

const initialState = {
	type: '',
	message: '',
}

const AlertReducer = (state = initialState, action) => {
	switch (action.type) {
		case ERROR_ALERT: {
			return {
				...state,
				type: 'error',
				message: action.payload,
			}
		}
		case SUCCESS_ALERT: {
			return {
				...state,
				type: 'success',
				message: action.payload,
			}
		}
		case LOADING_ALERT: {
			return {
				...state,
				type: 'loading',
				message: action.payload,
			}
		}
		case CLEAR_ALERT: {
			return {
				...state,
				type: '',
				message: '',
			}
		}
		default:
			return state
	}
}

export default AlertReducer

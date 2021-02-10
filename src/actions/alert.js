import { ERROR_ALERT, SUCCESS_ALERT, CLEAR_ALERT } from './types'

export const clearAlert = () => (dispatch) => {
	dispatch({ type: CLEAR_ALERT })
}

export const setErrorAlert = (message) => (dispatch) => {
	dispatch({ type: ERROR_ALERT, payload: message })
	setTimeout(() => {
		dispatch(clearAlert())
	}, 5000)
}

export const setSuccessAlert = (message) => (dispatch) => {
	dispatch({ type: SUCCESS_ALERT, payload: message })
	setTimeout(() => {
		dispatch(clearAlert())
	}, 5000)
}

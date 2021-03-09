import { SET_EDITING, CLEAR_EDITING, TOGGLE_EDITING } from './types'

export const setEditing = (product) => (dispatch) => {
	dispatch({ type: SET_EDITING, payload: product })
}

export const clearEditing = () => (dispatch) => {
	dispatch({ type: CLEAR_EDITING })
}

export const toggleEditing = () => (dispatch) => {
	dispatch({ type: TOGGLE_EDITING })
}

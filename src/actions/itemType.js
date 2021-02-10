import { SET_ID, SET_SEARCH, TOGGLE_ITEMTYPE } from './types'

export const setId = (id) => async (dispatch) => {
	dispatch({ type: SET_ID, payload: id })
}

export const setSearch = (search) => async (dispatch) => {
	dispatch({ type: SET_SEARCH, payload: search })
}

export const toggleItemtype = () => async (dispatch) => {
	dispatch({ type: TOGGLE_ITEMTYPE })
}

import { SET_MAIN, SET_PHOTOS, SET_DESCRIPTION, SET_SIZES } from './types'

export const setMain = (payload) => async (dispatch) => {
	dispatch({ type: SET_MAIN, payload })
}

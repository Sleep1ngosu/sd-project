import { SET_PREV_PRODUCT } from './types'

export const setPrevProduct = (product) => (dispatch) => {
	dispatch({ type: SET_PREV_PRODUCT, payload: product })
}

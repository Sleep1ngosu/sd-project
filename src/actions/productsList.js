import { SET_PRODUCTS_LIST } from './types'
import axios from '../utils/axios'

export const setProductsList = () => async (dispatch) => {
	try {
		const URI = '/products/products_list'
		const response = await axios.get(URI)
		dispatch({ type: SET_PRODUCTS_LIST, payload: response.data })
	} catch (err) {
		console.log(err.response)
	}
}

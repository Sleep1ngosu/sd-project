import { SET_EDITING, CLEAR_EDITING, TOGGLE_EDITING } from './types'
import axios from '../utils/axios'
import { clearProduct } from './product'
import { clearItemType } from './itemType'
import { setSuccessAlert, setLoadingAlert } from '../actions/alert'

export const setEditing = (product) => (dispatch) => {
	dispatch({ type: SET_EDITING, payload: product })
}

export const clearEditing = () => (dispatch) => {
	dispatch({ type: CLEAR_EDITING })
}

export const toggleEditing = () => (dispatch) => {
	dispatch({ type: TOGGLE_EDITING })
}

export const editItem = (editingProduct, newProduct) => async (dispatch) => {
	try {
		await dispatch(setLoadingAlert('loading...'))
		const sku = editingProduct.sku
		const URI = `/products/update_product/${sku}`
		const response = await axios.patch(URI, newProduct)
		console.log(response)
		dispatch(clearProduct())
		dispatch(clearItemType())
		dispatch(clearEditing())
		dispatch(setSuccessAlert('Successfully edited!'))
	} catch (err) {
		console.log(err.response)
	}
}

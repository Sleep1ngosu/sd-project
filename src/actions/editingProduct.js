import {
	SET_EDITING,
	CLEAR_EDITING,
	TOGGLE_EDITING,
	SET_EDITING_MAIN,
	SET_EDITING_DESCRIPTION,
	SET_EDITING_PHOTOS,
	SET_EDITING_DIMENSIONS,
} from './types'
import axios from '../utils/axios'
import { clearProduct } from './product'
import { clearItemType } from './itemType'
import {
	setSuccessAlert,
	setLoadingAlert,
	setErrorAlert,
} from '../actions/alert'

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
		dispatch(setErrorAlert('Error'))
		console.log(err.response)
	}
}

export const setEditingMain = (main, id) => (dispatch) => {
	const data = { ...main, id }
	dispatch({ type: SET_EDITING_MAIN, payload: data })
}

export const setEditingDescription = (description, id) => (dispatch) => {
	const data = { ...description, id }
	dispatch({ type: SET_EDITING_DESCRIPTION, payload: data })
}

export const setEditingPhotos = (photos, id) => (dispatch) => {
	const data = { ...photos, id }
	dispatch({ type: SET_EDITING_PHOTOS, payload: data })
}

export const setEditingDimensions = (dimensions, id) => (dispatch) => {
	const data = { ...dimensions, id }
	dispatch({ type: SET_EDITING_DIMENSIONS, payload: data })
}

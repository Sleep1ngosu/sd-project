import {
	SET_MAIN,
	SET_PHOTOS,
	SET_DESCRIPTION,
	SET_SIZES,
	CLEAR_PRODUCT,
	SUCCESS_ALERT,
	ERROR_ALERT,
} from './types'
import { convertToBdValues } from '../helpers/convertToBdValues'
import { createProduct } from './createProduct'
import { setSuccessAlert, setErrorAlert } from './alert'

//main
export const setMainAndCreate = (payload, id, products) => async (dispatch) => {
	let obj = {
		battery: payload.battery,
		dangerous: payload.dangerous,
		sp_id_type: payload.sp_id_type,
		variation_type: payload.variation_type,
	}
	let array = []
	for (let key in obj) {
		array.push(obj[key])
	}
	let newArray = convertToBdValues(array)
	let counter = 0
	for (let key in obj) {
		payload[key] = newArray[counter]
		counter++
	}
	for (let key in payload) {
		if (payload[key] === undefined) payload[key] = null
	}
	await dispatch(createProduct(payload, id, products))
}

export const setMain = (payload) => async (dispatch) => {
	dispatch({ type: SET_MAIN, payload })
}

//description
export const setDescriptionAndCreate = (payload, id, products) => async (
	dispatch
) => {
	const obj = {
		bullet_1: payload.description.bullet_1,
		bullet_2: payload.description.bullet_2,
		bullet_3: payload.description.bullet_3,
		bullet_4: payload.description.bullet_4,
		bullet_5: payload.description.bullet_5,
	}
	let array = []

	for (let key in obj) {
		if (obj[key]) {
			array.push(obj[key])
		}
	}
	if (array.join().length - (array.length - 1) > 999) {
		console.log('so many characters')
		dispatch({
			type: ERROR_ALERT,
			payload: 'So many chars in all bullets. ERROR',
		})
	} else {
		dispatch(createProduct(payload, id, products))
	}
}

export const setDescription = (payload) => async (dispatch) => {
	const { bullet_1, bullet_2, bullet_3, bullet_4, bullet_5 } = payload
	const obj = {
		bullet_1,
		bullet_2,
		bullet_3,
		bullet_4,
		bullet_5,
	}
	let array = []

	for (let key in obj) {
		if (obj[key]) {
			array.push(obj[key])
		}
	}
	if (array.join().length - (array.length - 1) > 999) {
		console.log('so many characters')
		dispatch({
			type: ERROR_ALERT,
			payload: 'So many chars in all bullets. ERROR',
		})
	} else {
		dispatch({ type: SET_DESCRIPTION, payload })
	}
}

//setPhotos
export const setPhotosAndCreate = (payload, id, products) => async (
	dispatch
) => {
	let array = []

	payload.photos.forEach((e) => {
		array.push(e.image_type)
	})
	let newArray = convertToBdValues(array)
	payload.photos.forEach((e, i) => {
		e.image_type = newArray[i]
	})
	dispatch(createProduct(payload, id, products))
}

export const setPhotos = (payload) => async (dispatch) => {
	dispatch({ type: SET_PHOTOS, payload })
}

//setSizes
export const setSizesAndCreate = (payload, id, products) => async (
	dispatch
) => {
	dispatch(createProduct(payload, id, products))
}

export const setSizes = (payload) => async (dispatch) => {
	dispatch({ type: SET_SIZES, payload })
}

export const clearProduct = () => (dispatch) => {
	dispatch({ type: CLEAR_PRODUCT })
}

import { SET_MAIN, SET_PHOTOS, SET_DESCRIPTION, SET_SIZES } from './types'
import { convertToBdValues } from '../helpers/convertToBdValues'

export const setMain = (payload) => async (dispatch) => {
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
	dispatch({ type: SET_MAIN, payload })
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
	} else {
		dispatch({ type: SET_DESCRIPTION, payload })
	}
}

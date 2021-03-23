import axios from '../utils/axios'
import { clearProduct } from './product'
import { setPrevProduct } from './prevProduct'
import { clearItemType } from './itemType'
import {
	setSuccessAlert,
	setErrorAlert,
	setLoadingAlert,
} from '../actions/alert'

export const createProduct = (requestData, itemType, products) => async (
	dispatch
) => {
	try {
		await dispatch(setLoadingAlert('loading...'))
		requestData.photos.forEach((photo) => {
			if (photo.image) {
				const newImageBase64 = photo.image.split(',')[1]
				photo.image = newImageBase64
			}
		})
		const URI = '/products/new_product'
		const data = {
			...requestData,
			description: {
				...requestData.description,
			},
			dimensions: {
				...requestData.dimensions,
			},
			photos: [...requestData.photos],
			item_type: itemType,
		}
		if (data.parent_id && typeof data.parent_id !== 'number') {
			const currentProduct = products.filter(
				(product) => product.sku === data.parent_id
			)
			const id = currentProduct[0].id
			if (id) {
				data.parent_id = id
			}
		}
		// const response = await axios.post(URI, data)
		// console.log(response)
		// dispatch(setPrevProduct(data))
		// dispatch(clearProduct())
		// dispatch(clearItemType())
		// dispatch(setSuccessAlert('Successfully created!'))
		console.log(data)
	} catch (err) {
		console.log(err.response)

		dispatch(setErrorAlert('Something went wrong...'))
	}
}

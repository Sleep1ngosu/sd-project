import axios from '../utils/axios'
import { clearProduct } from './product'
import {
	setSuccessAlert,
	setErrorAlert,
	setLoadingAlert,
} from '../actions/alert'

export const createProduct = (requestData, itemType, products) => async (
	dispatch
) => {
	try {
		dispatch(setLoadingAlert('loading...'))
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
		if (data.parent_id) {
			const currentProduct = products.filter(
				(product) => product.sku === data.parent_id
			)
			const id = currentProduct[0].id
			if (id) {
				data.parent_id = id
			}
		}
		const response = await axios.post(URI, data)
		console.log(response)
		dispatch(clearProduct())
		dispatch(setSuccessAlert('Successfully created!'))
	} catch (err) {
		console.log(err.response)

		dispatch(setErrorAlert('Something went wrong...'))
	}
}

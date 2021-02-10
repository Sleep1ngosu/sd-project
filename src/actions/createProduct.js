import axios from '../utils/axios'

export const createProduct = (search) => async (dispatch) => {
	try {
		const URI = '/products/item_types'
		const data = {
			attr_item_type_keywords: search,
		}
		const response = await axios.post(URI, data)
		console.log(response)
	} catch (err) {
		console.log(err.response)
	}
}

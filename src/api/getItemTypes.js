import axios from '../utils/axios'

export const getItemTypes = async (search) => {
	try {
		const URI = '/products/item_types'
		const data = {
			attr_item_type_keywords: search,
		}
		const response = await axios.post(URI, data)
		return response
	} catch (err) {
		console.log(err.response)
	}
}

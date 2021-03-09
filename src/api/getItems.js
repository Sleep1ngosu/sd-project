import axios from '../utils/axios'

export const getItems = async () => {
	try {
		const URI = '/products/products_list'
		const response = await axios.get(URI)
		return response
	} catch (err) {
		console.log(err.response)
	}
}

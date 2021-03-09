import axios from '../utils/axios'

export const editItem = async (editingProduct, newProduct) => {
	try {
		const sku = editingProduct.sku
		const URI = `/products/update_product/${sku}`
		const response = await axios.patch(URI, newProduct)
		console.log(response)
	} catch (err) {
		console.log(err.response)
	}
}

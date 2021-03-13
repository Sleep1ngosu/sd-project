export const findProductId = (products, sku) => {
	let id
	products.forEach((product) => {
		if (product.sku === sku) {
			id = product.id
		}
	})
	return id || false
}

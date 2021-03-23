export const initialState = {
	item_weight: undefined,
	item_weight_mu: 'LB',

	package_weight: undefined,
	package_weight_mu: 'LB',

	package_width: undefined,
	package_width_mu: 'FT',

	package_length: undefined,
	package_length_mu: 'FT',

	package_height: undefined,
	package_height_mu: 'FT',
}

export const labels = [
	'Item weight',
	'Package weight',
	'Package width',
	'Package length',
	'Package height',
]

export const names_size = [
	'item_weight',
	'package_weight',
	'package_width',
	'package_length',
	'package_height',
]

export const names_units = [
	'item_weight_mu',
	'package_weight_mu',
	'package_width_mu',
	'package_length_mu',
	'package_height_mu',
]

export const types = ['weight', 'weight', 'size', 'size', 'size']

export const options_size = ['FT', 'IN', 'CM', 'MM', 'M']
export const options_weigth = ['LB', 'OZ', 'KG', 'GR']

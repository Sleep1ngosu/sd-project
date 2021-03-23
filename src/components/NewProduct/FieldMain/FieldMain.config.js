// variables
export const SIType = ['UPC', 'EAN', 'ISBN']
export const Battery = ['NO', 'YES']
export const ApplicableDangerous = [
	'GHS',
	'Storage',
	'Waste',
	'Not Applicable',
	'Transportation',
	'Other',
	'Unknown',
]
export const VariationType = [
	'',
	'Size',
	'Color',
	'number_of_items',
	'LineSize',
	'SizeColor',
	'color - size',
	'material',
	'MaximumExpandableSize',
	'PaperSize',
	'SizeName',
	'SizeName - ColorName',
]

// initial data
export const initialData = {
	is_parent: '',
	parent_id: '',
	variation_type: '',
	variation_text: '',
	item_type: '',
	sku: '',
	sp_id_type: 'UPC',
	sp_id_value: '',
	price: '0.00',
	quantity: 0,
	battery: 'NO',
	dangerous: 'Not Applicable',
}

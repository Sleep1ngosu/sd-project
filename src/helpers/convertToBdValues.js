export const convertToBdValues = (array) => {
	if (array.lenght !== 0) {
		array.forEach((e, i) => {
			switch (e) {
				case 'YES': {
					array[i] = 'Y'
					break
				}
				case 'NO': {
					array[i] = 'N'
					break
				}
				case 'Storage': {
					array[i] = 'S'
					break
				}
				case 'Waste': {
					array[i] = 'W'
					break
				}
				case 'Not Applicable': {
					array[i] = 'NA'
					break
				}
				case 'Transportation': {
					array[i] = 'Tr'
					break
				}
				case 'Other': {
					array[i] = 'O'
					break
				}
				case 'Unknown': {
					array[i] = 'Un'
					break
				}
				case 'Size': {
					array[i] = 'S'
					break
				}
				case 'Color': {
					array[i] = 'C'
					break
				}
				case 'number_of_items': {
					array[i] = 'NOI'
					break
				}
				case 'LineSize': {
					array[i] = 'LS'
					break
				}
				case 'SizeColor': {
					array[i] = 'SC'
					break
				}
				case 'color - size': {
					array[i] = 'CS'
					break
				}
				case 'material': {
					array[i] = 'M'
					break
				}
				case 'MaximumExpandableSize': {
					array[i] = 'MES'
					break
				}
				case 'PaperSize': {
					array[i] = 'PS'
					break
				}
				case 'SizeName': {
					array[i] = 'SN'
					break
				}
				case 'SizeName - ColorName': {
					array[i] = 'SNCN'
					break
				}
				case 'Main': {
					array[i] = 'M'
					break
				}
				case 'Swatch': {
					array[i] = 'S'
					break
				}
				case 'BKLB': {
					array[i] = 'B'
					break
				}
				case 'Search': {
					array[i] = 'Sh'
					break
				}
				case 'PM01': {
					array[i] = 'P'
					break
				}
				case 'MainOfferImage': {
					array[i] = 'MOI'
					break
				}
				case 'OfferImage1': {
					array[i] = 'OI1'
					break
				}
				case 'OfferImage2': {
					array[i] = 'OI2'
					break
				}
				case 'OfferImage3': {
					array[i] = 'OI3'
					break
				}
				case 'OfferImage4': {
					array[i] = 'OI4'
					break
				}
				case 'OfferImage5': {
					array[i] = 'OI5'
				}
				default: {
					array[i] = array[i]
					break
				}
			}
		})
		return array
	} else return array
}

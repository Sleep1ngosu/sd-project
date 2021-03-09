import { combineReducers } from 'redux'
import product from './product'
import blocker from './blocker'
import alert from './alert'
import itemType from './itemType'
import listing from './listing'
import editingProduct from './editingProduct'
import photos from './photos'

export default combineReducers({
	product,
	blocker,
	alert,
	itemType,
	listing,
	editingProduct,
	photos,
})

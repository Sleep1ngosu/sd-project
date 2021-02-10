import { combineReducers } from 'redux'
import product from './product'
import blocker from './blocker'
import alert from './alert'
import itemType from './itemType'

export default combineReducers({
	product,
	blocker,
	alert,
	itemType,
})

import { OPEN_PHOTOS, CLOSE_PHOTOS } from '../actions/types'

const initialState = {
	isOpen: false,
	photos: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case OPEN_PHOTOS: {
			return {
				...state,
				isOpen: true,
				photos: action.payload,
			}
		}
		case CLOSE_PHOTOS: {
			return {
				...state,
				isOpen: false,
				photos: [],
			}
		}
		default:
			return state
	}
}

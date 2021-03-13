import { SET_EDITING, CLEAR_EDITING, TOGGLE_EDITING } from '../actions/types'

const initialState = {
	isEditing: false,
	editingProduct: {
		description: {},
		photos: [],
		dimensions: {},
	},
}

const EditingProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_EDITING: {
			return {
				...state,
				isEditing: true,
				editingProduct: action.payload,
			}
		}
		case CLEAR_EDITING: {
			return {
				...state,
				isEditing: false,
				editingProduct: {
					description: {},
					photos: [],
					dimensions: {},
				},
			}
		}
		case TOGGLE_EDITING: {
			return {
				...state,
				isEditing: !state.isEditing,
			}
		}
		default:
			return state
	}
}

export default EditingProductReducer

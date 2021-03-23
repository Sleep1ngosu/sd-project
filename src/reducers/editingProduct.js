import {
	SET_EDITING,
	CLEAR_EDITING,
	TOGGLE_EDITING,
	SET_EDITING_MAIN,
	SET_EDITING_DESCRIPTION,
	SET_EDITING_PHOTOS,
	SET_EDITING_DIMENSIONS,
} from '../actions/types'

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
				editingProduct: {
					description: {},
					photos: [],
					dimensions: {},
				},
			}
		}
		case SET_EDITING_MAIN: {
			return {
				...state,
				editingProduct: {
					...action.payload,
					description: state.editingProduct.description,
					photos: state.editingProduct.photos,
					dimensions: state.editingProduct.dimensions,
				},
			}
		}
		case SET_EDITING_DESCRIPTION: {
			return {
				...state,
				editingProduct: {
					...state.editingProduct,
					description: action.payload,
					photos: state.editingProduct.photos,
					dimensions: state.editingProduct.dimensions,
				},
			}
		}
		case SET_EDITING_PHOTOS: {
			return {
				...state,
				editingProduct: {
					...state.editingProduct,
					description: state.editingProduct.description,
					photos: action.payload,
					dimensions: state.editingProduct.dimensions,
				},
			}
		}
		case SET_EDITING_DIMENSIONS: {
			return {
				...state,
				editingProduct: {
					...state.editingProduct,
					description: state.editingProduct.description,
					photos: state.editingProduct.photos,
					dimensions: action.payload,
				},
			}
		}
		default:
			return state
	}
}

export default EditingProductReducer

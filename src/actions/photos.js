import { OPEN_PHOTOS, CLOSE_PHOTOS } from './types'

export const openPhotos = (photos) => (dispatch) => {
	dispatch({ type: OPEN_PHOTOS, payload: photos })
}

export const closePhotos = () => (dispatch) => {
	dispatch({ type: CLOSE_PHOTOS })
}

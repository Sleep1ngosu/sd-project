import React, { useState, useEffect } from 'react'
import './LookPhoto.scss'
import { connect } from 'react-redux'
import leftArrow from '../../../assets/icons/left-arrow.png'
import rightArrow from '../../../assets/icons/right-arrow.png'
import leftArrowDisabled from '../../../assets/icons/left-arrow-disabled.png'
import rightArrowDisabled from '../../../assets/icons/right-arrow-disabled.png'
import topArrow from '../../../assets/icons/arrow-up.png'
import downArrow from '../../../assets/icons/arrow-down.png'
import topArrowDisabled from '../../../assets/icons/arrow-up-disabled.png'
import downArrowDisabled from '../../../assets/icons/arrow-down-disabled.png'
import closeIcon from '../../../assets/icons/CrossIcon.png'
import { closePhotos } from '../../../actions/photos'
import { removeBlocker } from '../../../actions/blocker'

import { Photo } from './Photo'

const LookPhoto = (props) => {
	let [images, setImages] = useState({
		start: 0,
		end: 0,
		photo: null,
		photoIndex: null,
		images: [],
		types: [],
	})

	useEffect(() => {
		const arrayImages = [],
			arrayTypes = []
		props.photos.forEach((object) => {
			arrayImages.push(object.image)
			arrayTypes.push(object.image_type)
		})
		setImages({
			...images,
			images: arrayImages,
			end: arrayImages.length > 2 ? 2 : arrayImages.length - 1,
			photo: arrayImages[0] ? arrayImages[0] : null,
			photoIndex: arrayImages[0] ? 0 : null,
			types: arrayTypes,
		})
	}, [props.photos])

	let renderedTopArrow = (images.start === 0 && topArrowDisabled) || topArrow
	let renderedDownArrow =
		(images.end === images.images.length - 1 && downArrowDisabled) || downArrow
	let renderedLeftArrow =
		(images.photoIndex === 0 && leftArrowDisabled) || leftArrow
	let renderedRightArrow =
		(images.photoIndex === images.images.length - 1 && rightArrowDisabled) ||
		rightArrow

	const usingImages = []
	for (let i = images.start; i <= images.end; i++) {
		usingImages.push(images.images[i])
	}

	const onClickPhoto = (photo) => {
		const index = images.images.indexOf(photo)
		setImages({ ...images, photo, photoIndex: index })
	}

	const onClickTopArrow = () => {
		if (images.start !== 0)
			setImages({ ...images, start: images.start - 1, end: images.end - 1 })
	}

	const onClickDownArrow = () => {
		if (images.end !== images.images.length - 1)
			setImages({ ...images, start: images.start + 1, end: images.end + 1 })
	}

	const onClickRightArrow = () => {
		if (images.photoIndex !== images.images.length - 1) {
			setImages((images) => {
				return {
					...images,
					photo: images.images[images.photoIndex + 1],
					photoIndex: images.photoIndex + 1,
				}
			})
		}
	}

	const onClickLeftArrow = () => {
		if (images.photoIndex !== 0) {
			setImages({
				...images,
				photo: images.images[images.photoIndex - 1],
				photoIndex: images.photoIndex - 1,
			})
		}
	}

	const closePhotos = () => {
		props.closePhotos()
		props.removeBlocker()
	}

	const usingImagesList = usingImages.map((image, index) => {
		return (
			<Photo
				key={`${image}${index}`}
				text={image}
				onClick={onClickPhoto}
				image={image}
			/>
		)
	})
	return (
		<div
			style={(props.isOpen && { display: 'flex' }) || { display: 'none' }}
			className="productList__lookPhoto__wrapper"
		>
			<div className="productList__lookPhoto">
				<div className="productList__lookPhoto__leftSlider">
					<div className="arrow-top">
						<img
							onClick={onClickTopArrow}
							className="icon"
							src={renderedTopArrow}
							alt="up arrow"
						/>
					</div>
					<div className="slider">{usingImagesList}</div>
					<div className="arrow-bottom">
						<img
							onClick={onClickDownArrow}
							className="icon"
							src={renderedDownArrow}
							alt="down arrow"
						/>
					</div>
				</div>
				<div className="productList__lookPhoto__rightSlider">
					<div className="type">Type: {images.types[images.photoIndex]}</div>
					<div className="image">
						<div className="left-arrow">
							<img
								onClick={onClickLeftArrow}
								src={renderedLeftArrow}
								className="icon"
								alt="left arrow"
							/>
						</div>
						<div className="image">
							{/* {images.photo} */}
							<img className="photo" src={images.photo} alt="image" />
						</div>
						<div className="right-arrow">
							<img
								onClick={onClickRightArrow}
								src={renderedRightArrow}
								className="icon"
								alt="right arrow"
							/>
						</div>
					</div>
				</div>
				<div onClick={closePhotos} className="close">
					<img src={closeIcon} className="icon" alt="close icon" />
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isOpen: state.photos.isOpen,
		photos: state.photos.photos,
	}
}

export default connect(mapStateToProps, { closePhotos, removeBlocker })(
	LookPhoto
)

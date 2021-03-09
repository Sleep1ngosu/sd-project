import React from 'react'

export const Photo = (props) => {
	return (
		<div className="photo">
			<img
				onClick={() => props.onClick(props.text)}
				className="image"
				src={props.image}
				alt="image"
			/>
		</div>
	)
}

import React from 'react'
import './CreateDate.scss'

const CreateDate = () => {
	return (
		<div className="createDate">
			<span className="createDate__label">Create date</span>
			<input
				disabled="disabled"
				className="createDate__input"
				type="text"
			/>
		</div>
	)
}

export default CreateDate

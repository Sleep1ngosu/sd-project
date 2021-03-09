import React from 'react'
import './Signin.scss'

export const Signin = () => {
	return (
		<form className="signin">
			<div className="signin__header">Logging in</div>
			<div className="signin__inputField"></div>
			<div className="signin__footer">
				<button type="submit" className="submit-btn">
					Submit
				</button>
			</div>
		</form>
	)
}

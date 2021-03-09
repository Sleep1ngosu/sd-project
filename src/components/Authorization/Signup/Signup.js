import React from 'react'
import './Signup.scss'

export const signup = () => {
	return (
		<form className="signup">
			<div className="signup__header">Logging in</div>
			<div className="signup__inputField"></div>
			<div className="signup__footer">
				<button type="submit" className="submit">
					Submit
				</button>
			</div>
		</form>
	)
}

import React from 'react'
import './Signin.scss'
import { Input } from '../components/Input/Input'

export const Signin = () => {
	return (
		<form className="signin">
			<div className="signin__header">Добро пожаловать!</div>
			<div className="signin__inputFields">
				<Input placeholder="Email" />
				<Input placeholder="Password" />
			</div>
			<div className="signin__footer">
				<button type="submit" className="submit-btn">
					Войти
				</button>
			</div>
		</form>
	)
}

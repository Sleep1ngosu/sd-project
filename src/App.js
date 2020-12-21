import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Logo from './assets/images/Logo.png'
import SiteNameEn from './assets/images/siteNameEn.png'
import Main from './components/Main/Main'
import NewProduct from './components/NewProduct/NewProduct'

const App = () => {
	return (
		<Router>
			<div className="App__wrapper">
				<header className="App__header">
					<div className="App__header__logo">
						<img src={Logo} alt="logo" />
					</div>
					<div className="App__header__sitename">
						<img src={SiteNameEn} alt="site-name-en" />
					</div>
					<div className="App__header__contacts">
						<span className="App__header__contacts__text">
							phone, viber, whatsapp: +7 904 870 43 27
						</span>
						<span className="App__header__contacts__text">
							email: piskun.victor@gmail.com
						</span>
					</div>
				</header>
				<main className="App__body">
					<Switch>
						<Route path="/" component={Main} exact />
						<Route
							path="/products/new_product"
							component={NewProduct}
							exact
						/>
					</Switch>
				</main>
				<footer className="App__footer">
					<div className="App__footer__contacts">
						<span className="App__footer__contacts__title">
							Контакты
						</span>
						<span className="App__footer__contacts__text">
							email: piskun.victor@gmail.com
						</span>
						<span className="App__footer__contacts__text">
							phone, viber, whatsapp: +7 904 870 43 27
						</span>
					</div>
				</footer>
			</div>
		</Router>
	)
}

export default App

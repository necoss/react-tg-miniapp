import Store from './components/Store'
import { WelcomeShowcase } from './components/WelcomeShowcase'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<WelcomeShowcase />} />
				<Route path="/store" element={<Store />} />
			</Routes>
		</Router>
	)
}

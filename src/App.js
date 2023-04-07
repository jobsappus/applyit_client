import React from 'react'
import { useImmerReducer } from 'use-immer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Team from './components/Team'

function App() {
	return (
		<BrowserRouter>
			<NavBar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/team" element={<Team />} />
				</Routes>
			</NavBar>
		</BrowserRouter>
	)
}

export default App

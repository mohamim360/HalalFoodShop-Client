import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import NavBar from '../Shared/NabBar/NavBar'

function Main() {
	return (
		<div>
			<NavBar/>
			<Outlet/>
			<Footer/>
		</div>
	)
}

export default Main
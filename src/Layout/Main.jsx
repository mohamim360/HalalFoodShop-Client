import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import NavBar from '../Shared/NabBar/NavBar'
import Menu from '../Shared/Menu/Menu'

function Main() {
	return (
		<div>
			<NavBar/>
			{/* <Menu/> */}
			<Outlet/>
			<Footer/>
		</div>
	)
}

export default Main
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Shared/Footer/Footer'
import NavBar from '../Shared/NabBar/NavBar'

function Main() {
	return (
		<>
			<NavBar/>
			<div className='mx-auto min-h-screen pb-16 pt-10'>
			<Outlet/>
			</div>
		
			<Footer/>
		</>
	)
}

export default Main
import React from 'react'
import Menu from '../Shared/Menu/Menu'
import { Outlet } from 'react-router-dom'


function Dashboard() {
	return (
		<>
		<div className='flex h-screen'>
		<Menu/>
	   <Outlet/>
		</div>

		</>
	)
}

export default Dashboard
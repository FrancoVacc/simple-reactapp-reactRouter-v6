import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPublic = () => {
  return (
    <div className='container'>
        <Outlet/>
        <footer className='navbar navbar-dark bg-dark text-white'>Este es el footer</footer>
    </div>
  )
}

export default LayoutPublic
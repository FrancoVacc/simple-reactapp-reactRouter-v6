import React from 'react'
import { NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className='conatiner'>
            <NavLink className="btn btn-outline-primary mx-2" to={"/"}>
                Inicio
            </NavLink>
            <NavLink className="btn btn-outline-primary mx-2" to="/blog">
                Blog
            </NavLink>
            <NavLink className="btn btn-outline-primary mx-2" to="/contacto">
                Contacto
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar
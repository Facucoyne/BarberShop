import React , {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen , setMenuopen] = useState(false)
    return (
    <nav>
        <Link to="/" className='title'>Barbershop
        </Link>

        <div className='menu' onClick={() => {
            setMenuopen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>

        </div>

        

    <ul className={menuOpen ? "open" : ""}>

    <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
        <NavLink to="/services">Servicios</NavLink>
        </li>
        <li>
        <NavLink to="/Contact">Contact</NavLink>
        </li>
    </ul>
  </nav>
  )
}

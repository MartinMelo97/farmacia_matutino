import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
    <ul className="navbar">
         <NavLink to="/" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Home</li>
          </NavLink>
          <NavLink to="/products" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Products</li>
          </NavLink>
          <NavLink to="/info" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Info</li>
          </NavLink>
          <NavLink to="/patients" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Patients</li>
          </NavLink>
        </ul>
)

export default Header
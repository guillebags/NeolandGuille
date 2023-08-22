import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to "/characters">Characters</NavLink>
            </li>
            <li>
                <NavLink to "spells">Spells</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav
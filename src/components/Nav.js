import React from 'react'
import {Link} from 'react-router-dom'
// import {Navbar, NavA} from '../Styles'

function Nav(props){
    return(
        <div className="nav">
        <Link to="/">iStocks</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Nav
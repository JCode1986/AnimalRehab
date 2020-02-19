import React from "react";
import logo from './logo.jpg'
import { Link } from "react-router-dom"

class Header extends React.Component {
    render() {
        return <>
        <div className='header'>
        <Link to="/"><img src={logo} align="middle" height= '130'alt="Logo" /></Link>
        </div>
        </>

    }
}

export default Header;
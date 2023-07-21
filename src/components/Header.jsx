import React from 'react'
import '../styles/Header.css'

const Header = () => {
    
    return (
        <>
            <nav className='navbar'>
                <div>
                    <img src={require("../Images/React-icon.svg.png")} alt="asdfd" />
                </div>
                <div>Get Ready to Complete Your Task</div>
                <div className='navbar-elements'>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Service</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
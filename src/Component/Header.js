import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/to-dos'>To Do</NavLink>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
            </div>
        )
    }
}

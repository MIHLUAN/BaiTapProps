import React, { Component } from 'react'
import { Outlet,NavLink } from 'react-router-dom'
export default class HomeTemplate extends Component {
  render() {
    return (
      <div className='row' >
        <div className='menu col-3'>
        <NavLink className={({isActive})=> isActive ? 'nav-link border border-primary border border-2 text-dark' : 'nav-link' } to='/home'>Home</NavLink>
        <NavLink className={({isActive})=> isActive ? 'nav-link border border-primary border border-2 text-dark' : 'nav-link' } to='/shop'>Shop</NavLink>
        </div>
        <div className='showInfo col-9'>
        <Outlet />
        </div>
      </div>
    )
  }
}

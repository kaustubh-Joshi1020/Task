import React from 'react'
import "./header.css"
import logo from "../assets/logo.png"

export default function Header() {
  return (
    <div className='logo'>
      <img src={logo} alt=""/>
    </div>
  )
}

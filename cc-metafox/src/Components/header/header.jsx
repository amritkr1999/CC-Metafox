import React from 'react'
import '../header/header.css' 

export default function Header() {
  return (
    <div className='head'>
          <a class="logo" href="#logo">LOGO</a>
          <a class="active" href="#home">Home</a>
          <a class="design" href="#design">Design</a>
          <a class="contact" href="#contact">Contact</a>
          <a class="about" href="#about">About</a>
    </div>
  )
}

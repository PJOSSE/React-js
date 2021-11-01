import logo from '../assets/logo.png'
import '../styles/Accueil.css'
import React from 'react'

function Test() {
    const title = 'Page en cours de création'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <img src={logo} alt='Logo' className='bav-logo'/>
        </div>
    )
}
export default Test
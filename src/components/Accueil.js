import logo from '../assets/logo.png'
import '../styles/Accueil.css'
import React from 'react'

function Accueil() {
    const title = ''
    return (
        <div className='bav-Accueil'>
            <img src={logo} alt='Logo' className='bav-logo'/>
            <h1 className='bav-title'>{title}</h1>
        </div>
    )
}
export default Accueil
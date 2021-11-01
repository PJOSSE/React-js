import logo from '../assets/logo.png'
import '../styles/Accueil.css'
import React from 'react'

function Contact() {
    const title = 'Contact'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <p> Vous pouvez nous retrouvez au <strong>2 avenue de la Forêt de Haye (54500 VANDOEUVRE-LES-NANCY)</strong>, 
                du lundi au vendredi de 9H à 18H ainsi que sur notre page Facebook  
                <br/><a target="_blank" rel="noreferrer" href="https://www.facebook.com/BricAVrac"><strong>Bric à vrac</strong></a>.</p>
            <img src={logo} alt='Logo' className='bav-logo'/>
        </div>
    )
}
export default Contact
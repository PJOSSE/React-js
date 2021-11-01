import logo from '../assets/logo.png'
import '../styles/Accueil.css'
import React from 'react'

function Projet() {
    const title = 'Notre projet'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <p>Notre projet est de proposer une <strong>interface à destination des entrepreneurs, des employés et des clients</strong> de ses entreprises avec des objectifs différents.</p>
            <p><strong>Pour l'entrepreneur</strong> et ses employés, rendre le stock facile d'usage avec <strong>des données concrètes à leur service</strong> : données sur les produits consommés et leurs quantités restantes, 
                durée de conservation et système <strong>pour un réapprovisionnement simplifié.</strong></p> 
            <p><strong>Pour les clients, faciliter au mieux les courses en leur rendant accessible des données importantes, rarement disponibles avec le vrac</strong> : étiquette nutritionnelle, origine du produit, proposition de recettes à partir des produits qu'ils envisagent d'acheter, mais surtout les quantités exactes avec un système de pesée des aliments sur un écran et des informations sur les allergènes, des conseils de conservation ou la date de péremption de l'aliment.</p>
            <img src={logo} alt='Logo' className='bav-logo'/>
        </div>
    )
}
export default Projet
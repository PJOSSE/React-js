import logo from '../assets/logo.png'
import '../styles/Accueil.css'
import React from 'react'

function Mentions() {
    const title = 'Mentions légales'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
                <p>Nos coordonnées complètes sont les suivantes :</p> 
                <p><strong>Nom complet de l’entité juridique :</strong> BRIC A VRAC SAS</p>
                <p><strong>Forme juridique de la société :</strong> Société par action simplifiées</p>
                <p><strong>Nom du responsable de la confidentialité des données :</strong> Directeur Général Samy NASTUZZI</p>
                <p><strong>Nom de la Présidente :</strong> Présidente Elise REY DU BOISSIEU</p>
                <p><strong>Directeur général :</strong> Samy NASTUZZI</p>
                <p><strong>Adresse e-mail :</strong> contact@bricavrac.com</p>
                <p><strong>Adresse postale :</strong> 2 avenue de la Forêt de Havre, 54500 Vandœuvre-lès-Nancy</p>
                <p><strong>Adresse du Siège social :</strong> 2 avenue de la Forêt de Havre, 54500 Vandœuvre-lès-Nancy</p>
                <p><strong>Montant du capital social :</strong> 15 500 €</p>
                <p><strong>Hébergeur du site :</strong> Google Cloud</p>
                <p><strong>Contact :</strong> contact@bricavrac.com</p>
                <p><strong>Compléments d’informations sur vos droits :</strong> https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228</p>
            <img src={logo} alt='Logo' className='bav-logo'/>
        </div>
    )
}
export default Mentions
import React from 'react'
import {Link} from 'react-router-dom'


function Navigation(){

    return(
        <ul style={{display: 'flex'}}>
            <Link to="/">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Accueil</li>
            </Link>
            <Link to="/Raison">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Nos raisons</li>   
            </Link>
            <Link to="/Projet">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Notre projet</li>   
            </Link>
            <Link to="/Contact">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Nous contacter</li>
            </Link>
            <Link to="/Connexion">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Connexion</li>
            </Link>
            <Link to="/Connexion/Test">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Création de compte</li>
            </Link>
            <Link to="/Confidentialité">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Confidentialité</li>
            </Link>
            <Link to="/Cookies">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Cookies</li>
            </Link>
            <Link to="/Mentions légales">
                 <li style={{marginLeft: 10, listStyle: 'none'}}>Mentions légales</li>
            </Link>

        </ul>
    )
};
export default Navigation;
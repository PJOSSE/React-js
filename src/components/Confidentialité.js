import logo from '../assets/logo.png'
import '../styles/Accueil.css'
import React from 'react'

function Confidentialité() {
    const title = 'Politique de confidentialité'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            
            <h2>Qui sommes-nous ?</h2>
            <p>Nous sommes une entreprise nouvellement crée et basée à VANDOEUVRE-LES-NANCY (près de Nancy). Nous proposons un service digital à destination d'entreprises intéressées par le vrac, pouvant s'adapter aux besoins et aux spécificités de chacune. La présidente est MME Elise REY DU BOISSIEU, les deux directeurs généraux, MME Flore LEENHARDT	
et M Samy NASTUZZI. Notre site est pour l'instant un site vitrine destiné à la présentation de notre entreprise et à la prospection de clients.
L’adresse de notre site est : https://bricavrac.com.</p>

            <h2>Commentaires</h2>
            <p>Quand vous laissez un commentaire sur notre site, les données inscrites dans le formulaire de commentaire, mais aussi votre adresse IP et l’agent utilisateur de votre navigateur sont collectés pour nous aider à la détection des commentaires indésirables.</p>

            <p>Une chaîne anonymisée créée à partir de votre adresse e-mail (également appelée hash) peut être envoyée au service Gravatar pour vérifier si vous utilisez ce dernier. Les clauses de confidentialité du service Gravatar sont disponibles ici : https://automattic.com/privacy/. Après validation de votre commentaire, votre photo de profil sera visible publiquement à coté de votre commentaire.</p>

            <h2>Médias</h2>
            <p>Si vous téléversez des images sur le site, nous vous conseillons d’éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les personnes visitant votre site peuvent télécharger et extraire des données de localisation depuis ces images.</p>

            <h2>Cookies</h2>
            <p>Si vous déposez un commentaire sur notre site, il vous sera proposé d’enregistrer votre nom, adresse e-mail et site dans des cookies. C’est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard. Ces cookies expirent au bout d’un an.</p>

            <p>Si vous vous rendez sur la page de connexion, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.</p>

            <p>Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.</p>

            <p>En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.</p>

            <h2>Contenu embarqué depuis d’autres sites</h2>
            <p>Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.</p>

            <p>Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.</p>

            <h2>Durées de stockage de vos données</h2>
            <p>Si vous laissez un commentaire, le commentaire et ses métadonnées sont conservés indéfiniment. Cela permet de reconnaître et d'approuver automatiquement les commentaires suivants au lieu de les laisser dans la file de modération.</p>

            <p>Pour les comptes qui s’inscrivent sur notre site (le cas échéant), nous stockons également les données personnelles indiquées dans leur profil. Tous les comptes peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur identifiant). Les gestionnaires du site peuvent aussi voir et modifier ces informations.</p>

            <h2>Les droits que vous avez sur vos données</h2>
            <p>Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité. Dans ce cadre là, vous pouvez nous contacter à l'adresse mail suivante : contact@bricavrac.com</p>

            <h2>Transmission de vos données personnelles</h2>
            <p>Les commentaires des visiteurs peuvent être vérifiés à l’aide d’un service automatisé de détection des commentaires indésirables.</p>
            <img src={logo} alt='Logo' className='bav-logo'/>
        </div>
    )
}
export default Confidentialité
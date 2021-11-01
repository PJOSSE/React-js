import logo from '../assets/logo.png'
import eco from '../assets/eco.png'
import '../styles/Accueil.css'
import React from 'react'


function Raison() {
    const title = 'Nos raisons'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
            <p className='bav-Raison-text'>Travaillons ensemble pour le Vrac !</p>
            <p>Aujourd'hui, l'emballage non nécessaire impacte nos vies.</p>
            <p>Quelques chiffres : <strong>En 2016, selon WWF, un tiers des déchets plastiques générés dans le monde, soit 100 millions de tonnes, ont terminé leur course dans la
            nature</strong>, c'est-à-dire dans les poissons que nous consommons, 
            dans l'air ou dans l'eau potable (microplastique).</p>

            <img src={eco} alt='eco' className='bav-eco'/>

            <p>En 2021, l’emballage représente un chiffre d’affaires de 18,3 milliards d’euros. 
            38 %, soit <strong>6,9 milliards d’euros pour les emballages plastiques, ressource finie</strong> qui aura son pic d'ici quelques années.
            Il n'y a pas d'équivalent actuellement au plastique à base de pétrole.
            <strong> Le papier-carton</strong> représente quand à lui 5,3 milliards d'euros (29%), cette resssource <strong>implique souvent la déforestation de forêts primaires</strong> et la plantation d'arbres à une échelle industrielle bien
            que de nombreux acteurs dans ce domaine mettent en place des actions contre cela.</p>

            <p>Il faut aussi ajouter certains impacts pour la santé plus spécifiques comme les encres minérales.</p>

            <p>Une solution accessible à tous ... la diminution drastique des emballages au strict nécessaire et son réemploi aussi souvent que possible.
            Acte citoyen, il permet une bonne gestion de nos ressources et de réfléchir à notre approvisionnement et 
            à notre alimentation.</p>

            <p>Moins d'emballages, c'est le mieux emballage et une réflexion plus poussée sur la logistique.
            <strong> Agissons ensemble, notre alimentation vaut mieux que ça !</strong></p>

            <h2>Sources</h2>
            <p>Sur le chiffre d'affaire des emballages, de TIZIANO POLITO, publié le 04/02/2021 chez Emballage magazine, <a target="_blank" rel="noreferrer" href="https://www.emballagesmagazine.com/tous-secteurs/l-emballage-represente-un-chiffre-d-affaires-de-18-3-milliards-d-euros.60808"> "L’emballage représente un chiffre d’affaires de 18,3 milliards d’euros"</a>.</p>
            <p>Sur le pic de pétrole, le magazine Reporterre, article de Hervé Kempf de HERVE KEMPF, publié le 26/06/2021, <a target="_blank" rel="noreferrer" href="https://reporterre.net/L-Europe-a-dix-ans-pour-se-preparer-au-pic-de-petrole"> "L’Europe a dix ans pour se préparer au pic de pétrole"</a>.</p>
           
            <img src={logo} alt='Logo' className='bav-logo'/>
        </div>
    )
}
export default Raison


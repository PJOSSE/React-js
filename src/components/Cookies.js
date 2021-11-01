import logo from '../assets/logo.png'
import '../styles/Accueil.css'
import React from 'react'

function Cookies() {
    const title = 'Politique des cookies'
    return (
        <div className='bav-Accueil'>
            <h1 className='bav-title'>{title}</h1>
                
                <h2>About this cookie policy</h2>
                <p>Cette page explique ce que sont les cookies, comment nous les utilisons, les types de cookies que nous utilisons, c'est-à-dire les informations que nous collectons à l'aide de cookies, comment ces informations sont utilisées et comment contrôler les préférences en matière de cookies. Pour plus d'informations sur la façon dont nous utilisons, stockons et protégeons vos données personnelles, consultez notre Politique de confidentialité.</p>

                <p>Vous pouvez à tout moment modifier ou retirer votre consentement de la déclaration relative aux cookies sur notre site Web. Pour en savoir plus sur qui nous sommes, comment nous contacter et comment sont traités vos données personnelles, les informations sont présentes sur la page politique de confidentialité. Votre consentement s'applique au domaine suivant : bricavrac.com.</p>

                <p>Votre état actuel : Consentement accepté. Gérez votre consentement.</p>

                <h2>Que sont les cookies ?</h2>
                <p>Les cookies sont de petits fichiers texte qui sont utilisés pour stocker de petites informations. Ils sont stockés sur votre appareil lorsque le site Web est chargé sur votre navigateur. Ces cookies nous aident à faire fonctionner correctement le site Web, à le rendre plus sûr, à offrir une meilleure expérience utilisateur, à comprendre les performances du site Web et à analyser ce qui fonctionne et les points à améliorer.</p>

                <h2>Comment utilisons-nous les cookies ?</h2>
                <p>Comme la plupart des services en ligne, notre site Web utilise des cookies propriétaires et tiers à plusieurs fins. Les cookies internes sont principalement nécessaires au bon fonctionnement du site Web et sont anonymisés.</p>

                <p>Les cookies tiers utilisés sur notre site Web servent principalement à comprendre le fonctionnement du site Web, la façon dont vous interagissez avec notre site Web, la sécurité de nos services, la fourniture de publicités pertinentes pour vous et, dans l'ensemble, servent à vous permettre une meilleure expérience sur le site ainsi qu'à accélérer vos futures interactions avec notre site Web.</p>

                <h2>Quels types de cookies utilisons-nous ?</h2>
                <p>Essentiel : Certains cookies sont essentiels pour que vous puissiez profiter de toutes les fonctionnalités de notre site. Ils nous permettent de maintenir les sessions utilisateur et de prévenir toute menace de sécurité. Ils ne collectent ni ne stockent aucune information personnelle. Par exemple, ces cookies vous permettent de vous connecter à votre compte et d'ajouter des produits à votre panier, et de passer à la caisse en toute sécurité.</p>

                <p>Statistiques : Ces cookies stockent des informations telles que le nombre de visiteurs sur le site Web, le nombre de visiteurs uniques, les pages du site Web qui ont été visitées, la source de la visite, etc. Ces données nous aident à comprendre et à analyser les performances du site Web. et où il a besoin d'être amélioré.</p>

                <p>Marketing : Notre site Web affiche des publicités. Ces cookies sont utilisés pour personnaliser les publicités que nous vous montrons afin qu'elles soient significatives pour vous. Ces cookies nous aident également à suivre l'efficacité de ces campagnes publicitaires. Les informations stockées dans ces cookies peuvent également être utilisées par les fournisseurs de publicité tiers pour vous montrer également des publicités sur d'autres sites Web sur le navigateur.</p>

                <p>Fonctionnel : Il s'agit des cookies qui aident certaines fonctionnalités non essentielles de notre site Web. Ces fonctionnalités incluent l'intégration de contenu comme des vidéos ou le partage de contenu du site Web sur les plateformes de médias sociaux.</p>

                <p>Préférences : Ces cookies nous aident à stocker vos paramètres et vos préférences de navigation, comme les préférences de langue, afin que vous ayez une expérience meilleure et efficace lors de vos futures visites sur le site Web.</p>

                <p>La liste ci-dessous détaille les cookies utilisés sur notre site Web.</p>

                <ul>
                    <h3>Description des cookies</h3>
                    <li>cookielawinfo-checkbox-analytics : Ce cookie est défini par le plugin GDPR Cookie Consent. Le cookie est utilisé pour stocker le consentement de l'utilisateur pour les cookies dans la catégorie "Analytics".</li>
                    <li>cookielawinfo-checkbox-functional :	Le cookie est défini par le consentement des cookies GDPR pour enregistrer le consentement de l'utilisateur pour les cookies dans la catégorie « Fonctionnel »</li>
                    <li>cookielawinfo-checkbox-necessary : Ce cookie est défini par le plugin GDPR Cookie Consent. Les cookies sont utilisés pour stocker le consentement de l'utilisateur pour les cookies dans la catégorie "Nécessaire".</li>
                    <li>cookielawinfo-checkbox-others :	Ce cookie est défini par le plugin GDPR Cookie Consent. Le cookie est utilisé pour stocker le consentement de l'utilisateur pour les cookies dans la catégorie "Autre".</li>
                    <li>cookielawinfo-checkbox-performance : Ce cookie est défini par le plugin GDPR Cookie Consent. Le cookie est utilisé pour stocker le consentement de l'utilisateur pour les cookies dans la catégorie "Performance".</li>
                    <li>viewed_cookie_policy : Le cookie est défini par le plugin GDPR Cookie Consent et est utilisé pour stocker si l'utilisateur a consenti ou non à l'utilisation de cookies. Il ne stocke aucune donnée personnelle.</li>
                </ul>
                              
                <h2>Comment contrôler les préférences en matière de cookies ?</h2>
                <p>Si vous décidez de modifier vos préférences ultérieurement au cours de votre session de navigation, vous pouvez cliquer sur l'onglet « Privacy & Cookie Policy » de votre écran. Cela affichera à nouveau l'avis de consentement vous permettant de modifier vos préférences ou de retirer complètement votre consentement.</p>

                <p>En plus de cela, différents navigateurs proposent différentes méthodes pour bloquer et supprimer les cookies utilisés par les sites Web. Vous pouvez modifier les paramètres de votre navigateur pour bloquer/supprimer les cookies. Pour en savoir plus sur la gestion et la suppression des cookies, visitez wikipedia.org, www.allaboutcookies.org.</p>
            <img src={logo} alt='Logo' className='bav-logo'/>
        </div>
    )
}
export default Cookies;

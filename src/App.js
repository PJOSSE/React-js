// import Banner from './Banner.js'
// import Navbar from './Navbar.js'
import Accueil from './components/Accueil.js'
import Raison from './components/Raison.js'
import Contact from './components/Contact.js'
import Navigation from './components/Navigation.js'
import Projet from './components/Projet.js'
import Test from './components/Test.js'
import Connexion from './components/Connexion.js'
import Confidentialité from './components/Confidentialité.js'
import Cookies from './components/Cookies.js'
import Mentions from './components/Mentions légales.js'

import React from 'react'

import{BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Router>
                <Navigation/>
                    <Route path="/" exact component={Accueil}/>
                    <Route path="/Projet" exact component={Projet}/>
                    <Route path="/Raison" exact component={Raison}/>
                    <Route path="/Contact" exact component={Contact}/>
                    <Route path="/Connexion" exact component={Connexion}/>
                    <Route path="/Connexion/Test" exact component={Test}/>
                    <Route path="/Cookies" exact component={Cookies}/>
                    <Route path="/Confidentialité" exact component={Confidentialité}/>
                    <Route path="/Mentions légales" exact component={Mentions}/>   
            </Router>    
        </div>
    );
}
export default App;

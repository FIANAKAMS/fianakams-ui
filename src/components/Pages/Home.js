import SideBar from '../SideBar/SideBar';
import './Home.css';
import React, { useState } from 'react';

function Home() {
  const [tableau, setTableau] = useState([
   ]);
  const [nouveauNom, setNouveauNom] = useState('');
  const [nouveauPrenom, setNouveauPrenom] = useState('');
  const [nouvelleDateNaissance, setNouvelleDateNaissance] = useState('');
  const [nouvelEmail, setNouvelEmail] = useState('');
  const [nouveauTelephone, setNouveauTelephone] = useState('');

  const ajouterElement = () => {
    if (nouveauNom.trim() !== '' && nouveauPrenom.trim() !== '' && nouvelleDateNaissance.trim() !== '' && nouvelEmail.trim() !== '' && nouveauTelephone.trim() !== '') {
      const nouvelElement = {
        nom: nouveauNom,
        prenom: nouveauPrenom,
        dateNaissance: nouvelleDateNaissance,
        email: nouvelEmail,
        telephone: nouveauTelephone,
      };
      setTableau([...tableau, nouvelElement]);
      setNouveauNom('');
      setNouveauPrenom('');
      setNouvelleDateNaissance('');
      setNouvelEmail('');
      setNouveauTelephone('');
    }
  };

  const supprimerElement = (index) => {
    const nouveauTableau = [...tableau];
    nouveauTableau.splice(index, 1);
    setTableau(nouveauTableau);
  };

  const modifierElement = (index, nom, prenom, dateNaissance, email, telephone) => {
    const tableauModifie = [...tableau];
    tableauModifie[index] = { nom, prenom, dateNaissance, email, telephone };
    setTableau(tableauModifie);
  };


  return (
    <>
      <div>
        <SideBar />
      </div>
      <header className="site-header">
        <div id="menu-container">
          <div id="menu-1" className="homepage home-section container">
            <div className="home-intro text-center">
              <h1 className="welcome-title animated fadeInLeft bryan">Welcome to FIANAKAM'S</h1>
              <p className="animated fadeInRight">
                <span className="blue"></span>
                <span className="green"></span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="tableau-container">
      <div className="input-container">
        <input type="text" value={nouveauNom} onChange={(e) => setNouveauNom(e.target.value)} placeholder="Nom" />
        <input type="text" value={nouveauPrenom} onChange={(e) => setNouveauPrenom(e.target.value)} placeholder="Prénom" />
        <input
          type="text"
          value={nouvelleDateNaissance}
          onChange={(e) => setNouvelleDateNaissance(e.target.value)}
          placeholder="Date de naissance"
        />
        <input type="text" value={nouvelEmail} onChange={(e) => setNouvelEmail(e.target.value)} placeholder="Email" />
        <input type="text" value={nouveauTelephone} onChange={(e) => setNouveauTelephone(e.target.value)} placeholder="Téléphone" />
        <button className="btn-ajouter" onClick={ajouterElement}>
          Ajouter un élément
        </button>
      </div>
      <ul className="tableau-liste">
        {tableau.map((element, index) => (
          <li key={index} className="tableau-element">
            <input type="text" value={element.nom} readOnly />
            <input type="text" value={element.prenom} readOnly />
            <input type="text" value={element.dateNaissance} readOnly />
            <input type="text" value={element.email} readOnly />
            <input type="text" value={element.telephone} readOnly />
            <div>
              <button className="btn-supprimer" onClick={() => supprimerElement(index)}>
                Supprimer
              </button>
              <button
                className="btn-modifier"
                onClick={() => modifierElement(index, element.nom, element.prenom, element.dateNaissance, element.email, element.telephone)}
              >
                Modifier
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

      <footer className="site-footer container text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="main-footer">
              <ul className="social">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 copyright">
            <p>Project 2 &copy; from <a href="https://github.com/FIANAKAM">Git FIANAKAM'S</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

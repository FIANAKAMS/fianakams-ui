import React, { useState } from 'react';
import './tableau.css';


function TableauModifiable() {
  const [tableau, setTableau] = useState([
    { nom: 'Doe', prenom: 'John', dateNaissance: '01/01/1990', email: 'john.doe@example.com', telephone: '123456789' },
    { nom: 'Smith', prenom: 'Jane', dateNaissance: '02/02/1995', email: 'jane.smith@example.com', telephone: '987654321' },
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
  );
}

export default TableauModifiable;

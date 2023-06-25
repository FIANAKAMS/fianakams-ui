import '../styles/table.css'

// TODO : Ajouter un border radius dans la table 
// Créer des données mock pour pouvoir controller la table (100 personnes, 12 mois, 100 status différents)
// Ajouter les fonctionnalités next/previous page 
export default function Table() {
    return (
    <div className="content">
        {/* Contenu du tableau */}
        <table className="table">
          <thead>
            <tr>
              <th>En-tête 1</th>
              <th>En-tête 2</th>
              <th>En-tête 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Donnée 1</td>
              <td>Donnée 2</td>
              <td>Donnée 3</td>
            </tr>
            {/* Autres lignes du tableau */}
          </tbody>
        </table>
    </div>
    )
}
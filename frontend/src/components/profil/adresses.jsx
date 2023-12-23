import React, { useState, useEffect } from 'react'
import '../../styles/components/profil/adresse.css'

function adresses() {

  const [adresse, setAdresse] = useState('');
  const [codepostal, setCodepostal] = useState('');
  const [ville, setVille] = useState('');
  const userId = localStorage.getItem('userId');

  // Effet pour la requête GET du adresse au chargement du composant
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/adresse/${userId}`);
        const data = await response.json();

        setAdresse(data.adresse || '');
        setCodepostal(data.codepostal || '');
        setVille(data.ville || '');
      } catch (error) {
        console.error('Erreur lors de la récupération du adresse :', error);
      }
    };

    fetchData();
  }, []);

    // Fonction pour effectuer la requête PUT lors du clic sur le bouton "modifier"
    const modifierAdresse = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/adresse/${userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            adresse,
            codepostal,
            ville,
          }),
        });
  
        if (response.ok) {
          console.log('Adresse mis à jour avec succès !');
        } else {
          console.error('Erreur lors de la mise à jour du adresse.');
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du adresse :', error);
      }
    };

  return (
    <div>
      <div className="form_from_3">
        <div className="form_21">
          <input 
            className="input_from"
            type="text"
            name="adresse"
            placeholder={adresse ? adresse : 'adresse'}
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
          />
          <span className="span_from_high"></span>
          <span className="span_from_bar"></span>
          <label className="label_from">Pseudo</label>
        </div>
        <div className="form_22">
          <input 
            className="input_from"
            type="text"
            name="codepostal"
            placeholder={codepostal ? codepostal : 'code postal'}
            value={codepostal}
            onChange={(e) => setCodepostal(e.target.value)}
          />
          <span className="span_from_high"></span>
          <span className="span_from_bar"></span>
          <label className="label_from">Pseudo</label>
        </div>
        <div className="form_23">
          <input 
            className="input_from"
            type="text"
            name="ville"
            placeholder={ville ? ville : 'ville'}
            value={ville}
            onChange={(e) => setVille(e.target.value)}
          />
          <span className="span_from_high"></span>
          <span className="span_from_bar"></span>
          <label className="label_from">Pseudo</label>
        </div>
        <div className="form_24">
          <input 
              className='input_from_10'
              type="button" 
              value="enregistrer" 
              onClick={modifierAdresse} 
            />
        </div>
        <select name="mdl" id="">
          <option value="none">Mode de livraison</option>
          <option value="dog">chronopost</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <div className="case-adresse">
          <p>get adresse enregistrer avec bouton modifier</p>
        </div>
      </div>
    </div>
  )
}

export default adresses
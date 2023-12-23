import React, { useState, useEffect } from 'react';
import Pp from '../../assets/pp.jpg'
import FileEdit from '../../assets/file-edit.svg'
import '../../styles/components/profil/profil.css'

function profil() {

    // État des champs de saisie
    const [pseudo, setPseudo] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [pp, setPp] = useState('');
    const [mail, setMail] = useState('');
    const [showInput, setShowInput] = useState(false);
    const userId = localStorage.getItem('userId');

    const showInputHandler = () => {
      setShowInput(true);
    };

    // Effet pour la requête GET au chargement du composant
    useEffect(() => {
      // Fonction asynchrone pour effectuer la requête
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/auth/${userId}`);
          const data = await response.json();
  
          // Mettre à jour les champs de saisie avec les données reçues
          setMail(data.email || '');
          // Ajoutez d'autres mises à jour d'état pour d'autres champs si nécessaire
        } catch (error) {
          console.error('Erreur lors de la récupération du profil :', error);
        }
      };
  
      // Appeler la fonction fetchData
      fetchData();
    }, []); // Les crochets vides signifient que cet effet s'exécute une seule fois au chargement du composant
  
    const envoyerEmail = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/modifier-email', {
        method: 'PATCH', // Ou 'PUT' en fonction de votre API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          mail,
          // Ajoutez d'autres champs à envoyer si nécessaire
        }),
      });

        if (response.ok) {
          console.log('Profil mis à jour avec succès !');
          // Vous pouvez ajouter des actions supplémentaires après la mise à jour du profil
        } else {
          console.error('Erreur lors de la mise à jour du profil.');
        }
      } catch (error) {
        console.error('Erreur lors de la mise à jour du profil :', error);
      }
    };

// Effet pour la requête GET du profil au chargement du composant
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profil/${userId}`);
      const data = await response.json();

      setPseudo(data.pseudo || '');
      setPrenom(data.prenom || '');
      setNom(data.nom || '');
      // Notez que pp doit être un lien vers l'image, pas le fichier lui-même
      setPp(data.pp || '');
    } catch (error) {
      console.error('Erreur lors de la récupération du profil :', error);
    }
  };

  fetchData();
}, []);

  // Fonction pour effectuer la requête POST lors du clic sur le bouton "envoyer"
  const envoyerProfil = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profil/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo,
          prenom,
          nom,
          pp,
          // Ajoutez d'autres champs à envoyer si nécessaire
        }),
      });

      if (response.ok) {
        console.log('Profil mis à jour avec succès !');
        // Vous pouvez ajouter des actions supplémentaires après la mise à jour du profil
      } else {
        console.error('Erreur lors de la mise à jour du profil.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  };

  // Fonction pour effectuer la requête PUT lors du clic sur le bouton "modifier"
  const modifierProfil = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profil/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo,
          prenom,
          nom,
          pp,
        }),
      });

      if (response.ok) {
        console.log('Profil mis à jour avec succès !');
      } else {
        console.error('Erreur lors de la mise à jour du profil.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil :', error);
    }
  };

  return (
    <div className="profil">
      <p>profil</p>
      <p>les commentaire, pseudo, nom, prénom, photo de profil, les poins cumulé, numéro de telephone, adresse mail et mots de passe</p>
      <div className="user-profil">
        <div className="pp-profil">
          {pp ? (
              <img src={pp} alt="photo de profil" className='img-pp' />
            ) : (
              // Afficher une image par défaut si pp est vide
              <img src={Pp} alt="photo de profil" className='img-pp' />
            )}
          <button className='btn-show-input-pp' onClick={showInputHandler}>
            <img src={FileEdit} alt="" className='pp-edit' />
          </button>
        </div>

        <div className="form_9">
          <input
            className="input_from"
            type="text"
            name="pseudo"
            placeholder={pseudo ? pseudo : 'pseudo'}
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          <span className="span_from_high"></span>
          <span className="span_from_bar"></span>
          <label className="label_from">Pseudo</label>
        </div>

        <div className="form_10">
          {showInput && (
            <div>
              <input 
                className="input_from"
                type="text"
                name="pp"
                placeholder={pp ? pp : 'url de votre image'}
                value={pp}
                onChange={(e) => setPp(e.target.value)}
              />
              <span className="span_from_high"></span>
              <span className="span_from_bar"></span>
              <label className="label_from">url de votre image</label>
            </div>
            )}
        </div>

        <div className="form_11">
          <input
            className="input_from"
            type="text"
            name="prenom"
            placeholder={prenom ? prenom : 'prenom'}
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <span className="span_from_high"></span>
          <span className="span_from_bar"></span>
          <label className="label_from">Prénom</label>
        </div>
        <div className="form_12">
          <input
            className="input_from"
            type="text"
            name="nom"
            placeholder={nom ? nom : 'nom'}
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
          <span className="span_from_high"></span>
          <span className="span_from_bar"></span>
          <label className="label_from">Nom</label>
        </div>
        <div className="form_13">
          <input 
            className='input_from_9'
            type="button" 
            value="sauvegarder" 
            onClick={modifierProfil} 
          />
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="info-compte">
        <input 
          className="input_from"
          type="tel" 
          name="" 
          id="" 
          placeholder='numéro de téléphone'
        />
        <input
          className="input_from"
          type="text"
          name="mail"
          placeholder={mail}
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input type="button" value="envoyer" onClick={envoyerEmail} />
        <p>modifier le mot de passe</p>
      </div>
    </div>
  )
}

export default profil
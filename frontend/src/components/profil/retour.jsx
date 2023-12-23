import React from 'react'
import { Link } from 'react-router-dom'

function retour() {
  return (
    <div>
      <p>faire un retour</p>
      <p>get tout les achats de se compte</p>
      <div className="vos-avis-retour"></div>
      <Link to="/">Nous contacter</Link>
    </div>
  )
}

export default retour
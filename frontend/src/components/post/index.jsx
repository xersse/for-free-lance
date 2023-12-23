import React from 'react'
import Nouveaute from './nouveaute'
import Promo from './promo'
import Replique from './replique'
import Collection from './collection'
import Autre from './autre'
import Livraison from './livraison'
import '../../styles/components/post/post.css'

const index = () => {

  const userId = localStorage.getItem('userId');

    return(
        <div className='post'>
          <div className='link-post'>
            <a href="/">HOME</a>
          </div>
          <div className='replique-post'>
            <Nouveaute userId={userId} />
            <Promo userId={userId} />
            <Replique userId={userId} />
            <Collection userId={userId} />
            <Autre userId={userId} />
          </div>
          <div className="livraison-post">
            <Livraison />
          </div>
        </div>
    )
}

export default index


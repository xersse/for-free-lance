const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const livraisonRoutes = require('./routes/livraison');
const nouveauteRoutes = require('./routes/nouveaute');
const adresseRoutes = require('./routes/adresse');
const profilRoutes = require('./routes/profil');
const promoRoutes = require('./routes/promo');
const repliqueRoutes = require('./routes/replique');
const collectionRoutes = require('./routes/collection');
const avisRoutes = require('./routes/avis');
const autreRoutes = require('./routes/autre');

mongoose.connect('my mongoose connect',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/livraison', livraisonRoutes);
app.use('/api/nouveaute', nouveauteRoutes);
app.use('/api/profil', profilRoutes);
app.use('/api/adresse', adresseRoutes);
app.use('/api/promo', promoRoutes);
app.use('/api/replique', repliqueRoutes);
app.use('/api/collection', collectionRoutes);
app.use('/api/avis', avisRoutes);
app.use('/api/autre', autreRoutes);


module.exports = app;
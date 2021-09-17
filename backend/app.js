const express = require('express');
const mongoose = require('mongoose');
const app = express();
//Rendre les données du corps de la requête exploitable
const bodyParser = require('body-parser');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const path = require('path');
// charger le fichier d'en pour le mettre dans process
require('dotenv').config();

//accéder à notre API depuis n'importe quelle origine && envoyer des requêtes avec les méthodes mentionnées
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



mongoose
  .connect(
    process.env.PASSWORD_MONGO,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
//extraire l'objet JSON 
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
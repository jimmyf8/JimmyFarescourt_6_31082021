const mongoose = require('mongoose');
//créer un schéma de données qui contient les champs souhaités pour chaque sauce
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: Array, required: true },
    usersDisliked: { type: Array, required: true }
});
//exporter ce schéma en tant que modèle Mongoose appelé «sauce », il est disponible pour notre application Express.
module.exports = mongoose.model('Sauce', sauceSchema);
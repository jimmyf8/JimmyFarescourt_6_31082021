const passwordSchema = require('../models/password_validator');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'votre mot de passe doit avoir 10 caractère minimum, une majuscule, une minuscule et un chiffre au minimum.' });
    } else {
        next();
    }
};
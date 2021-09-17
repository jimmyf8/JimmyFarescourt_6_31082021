module.exports = (req, res, next) => {
    const validEmail = (email) => {
        let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        let RegexTrue = emailRegex.test(email)
        RegexTrue ? next() : res.status(400).json({ message: 'email invalide' });
    }
    validEmail(req.body.email)
  };
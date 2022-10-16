    const User = require('../Models/User');
    const register = (req,res) => {
        const user = User({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
        });
}

module.exports = register;


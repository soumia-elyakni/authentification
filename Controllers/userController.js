    const User = require('../Models/User');
    const Joi = require('@hapi/joi');
    const userValidSchema = require('../Validate/userValidate.js')

    const register = (req,res) => {
       
      const validation = Joi.validate(req.body, userValidSchema);
      res.send(validation);

      const {body}=req
       User.create({...body}).then(()=>{
        res.json({body})
       }).catch(()=>{
        res.send('not saved')
       });
    
         
}

module.exports = {register};


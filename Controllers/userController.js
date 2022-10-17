    const User = require('../Models/User');
    const bcrypt = require('bcryptjs'); 

    const register = (req,res) => {
     
     const {body}=req;

     User.findOne({email:req.body.email}).then(e=>{
      if(!e){
        bcrypt.hash(body.password,10).then(e=>{
        body.password=e;
        User.create({...body}).then(()=>{
          res.send('saved')
        }).catch(()=>{
          res.send('not saved')
        })
      }).catch(()=>{
        res.send('error password')
    })
      }else{
        res.send('email exist already')
      }
     })
      
    
      
      
    
         
}

module.exports = {register};


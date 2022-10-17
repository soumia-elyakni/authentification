    const User = require('../Models/User');

    const register = (req,res) => {
     const {body}=req
     User.findOne({email:req.body.email}).then(e=>{
      if(!e){
        User.create({...body}).then(()=>{
          res.send('saved')
        }).catch(()=>{
          res.send('not saved')
        })
      }else{
        res.send('email exist already')
      }
     })
      
    
      
      
    
         
}

module.exports = {register};


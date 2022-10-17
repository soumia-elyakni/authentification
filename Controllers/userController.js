    const User = require('../Models/User');
    const register = (req,res) => {
       

      
      const {body}=req
       User.create({...body}).then(()=>{
        res.json({body})
       }).catch(()=>{
        res.send('not saved')
       });
    
         
}

module.exports = {register};


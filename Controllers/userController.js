    const User = require('../Models/User');
    const bcrypt = require('bcryptjs'); 
    const jwt = require('jsonwebtoken');
    const dotenv = require('dotenv');
   

    dotenv.config();

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

const login = (req,res) => {
  User.findOne({email:req.body.email}).then(user=>{
    if(user){
      bcrypt.compare(req.body.password, user.password).then(pass=>{
        if(pass){
          const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
          res.header('auth-token', token).send(token);
        } else { 
          res.send('Worrong password')}
      })
    } else { 
      res.send('email not existed')}
  })
}

const get = (req,res) =>{
  res.json({posts:{title: 'my first post', description: 'random data you shouldnt access'}});

}



module.exports = {register, login, get};


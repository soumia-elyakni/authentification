    const User = require('../Models/User');
    const Role = require('../Models/Role')
    const bcrypt = require('bcryptjs'); 
    const jwt = require('jsonwebtoken');
    const dotenv = require('dotenv');
   
   

    dotenv.config();

    const register = (req,res) => {
     const {body}=req;
     Role.findOne({role:'client'}).then(e=>{
      let idRole = e.id
      req.body.roles =[idRole]
     })
     
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
  User.findOne({email:req.body.email}).populate('roles').then(user=>{
    if(user){
      bcrypt.compare(req.body.password, user.password).then(pass=>{
        if(pass){
          const token = jwt.sign({_id: user._id, roles : user.roles.map(e => e.role)[0]}, process.env.TOKEN_SECRET);
          res.header('auth-token', token).send(token);
        } else { 
          res.json({msg:'Worrong password'})}
      })
    } else { 
      res.send('email not existed')}
  })
}

const get = (req,res) =>{
  role = req.roles;

  if(role == 'manager') {
    console.log('welcome to manager dashboard')
  } else if (role == 'client '){
    console.log('welcome to client dashboard')
  }
}

const logout = async (req, res)=>{
  header.remove('auth-token')
}



module.exports = {register, login, get, logout};


const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const User = db.user;

const addUser = async (req, res) => {
   let info = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      ip_address: req.body.ip_address
  };
  
const addUser = await User.create(info)
   res.status(200).send(addUser)
}

const getAllStore=async(req,res)=>{
   let allStore=await User.findAll({})

  res.status(200).send(allStore);
}

const getOneUser = async(req,res)=>{
   let Id=req.params.user_id
    let oneStore=await User.findOne({where: {id: Id}})
    res.status(200).send(oneStore)
 }

 const updateUser=async(req,res)=>{
   let Id=req.params.user_id
   const updateStore=await User.update(req.body,{where: {id : Id}})
   res.status(200).send(updateStore)
}

const deleteUser=async(req,res)=>{
   let id=req.params.user_id
  await User.destroy({where: {id: id}})
   res.status(200).send("User is Deleted ")
   console.log("User is Deleted" )
}

module.exports = {
   addUser,
   getAllStore,
   getOneUser,
   updateUser,
   deleteUser
}

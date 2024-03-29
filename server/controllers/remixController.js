const db = require('../models');
const { QueryTypes, Model } = require('sequelize');

const User = db.user;


// const signToken = (payload) => {
// 	const jwtSecret = process.env.TOKEN_SECRET;
// 	const jwtExpirySeconds = "10h";

// 	if (!jwtSecret) {
// 		throw new Error('JWT_SECRET not set in environment variables');
// 	}

// 	return jwt.sign(payload, jwtSecret, {
// 		expiresIn: jwtExpirySeconds,
// 	});
// };
const addUser = async (req, res) => {
   let info = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      password: req.body.password
   };
   const addUser = await User.create(info)

   // const token = signToken({ id: addUser[0].id });
   // const users_token = jwt.sign({
   //    user_id:addUser[0].id,
   // }, process.env.SECRET_KEY, { expiresIn: "7d" });


   res.status(200).send(addUser)
}

const getAllStore = async (req, res) => {
   let allStore = await User.findAll({})

   res.status(200).send(allStore);
}

const getOneUser = async (req, res) => {
   let Id = req.params.user_id
   let oneStore = await User.findOne({ where: { id: Id } })
   res.status(200).send(oneStore)
}

const updateUser = async (req, res) => {
   let Id = req.params.user_id
   const updateStore = await User.update(req.body, { where: { id: Id } })
   res.status(200).send(updateStore)
}

const deleteUser = async (req, res) => {
   let id = req.params.user_id
   await User.destroy({ where: { id: id } })
   res.status(200).send("User is Deleted ")
   console.log("User is Deleted")
}

module.exports = {
   addUser,
   getAllStore,
   getOneUser,
   updateUser,
   deleteUser
}

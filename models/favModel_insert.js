
const { insertFav } = require("../helpers/helpers");
const UserValidation = require("../classes/response_user_validation");
const { response } = require("express");

const favModel_insert =  async(req, res) => { 
  const rta = await insertFav(req.body.correo, req.body.id_idea)
  res.json (rta);
}

module.exports =
{
    favModel_insert
};
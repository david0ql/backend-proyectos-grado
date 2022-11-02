const { deleteFav } = require("../helpers/helpers");
const UserValidation = require("../classes/response_user_validation");
const { response } = require ("express");


const favMode_delete = async(req, res) =>{ 
    const rta = await deleteFav(req.body.id_ideaFav)
    res.json (rta);

}

module.exports = {
    favMode_delete
};
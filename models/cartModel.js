const { obtenerCart } = require("../helpers/helpers");
const UserValidation = require("../classes/response_user_validation");
const { response } = require ("express");


const cartModel = async (req, res =  response) =>{
const rta_cart = await obtenerCart (req.query.correo);
res.json(rta_cart);
};


module.exports = {
    cartModel
};
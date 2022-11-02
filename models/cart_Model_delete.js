const { deleteCart } = require("../helpers/helpers");
const UserValidation = require("../classes/response_user_validation");
const { response } = require ("express");



const cartModel_delete = async (req, res =  response) =>{
    const rta_cart = await deleteCart (req.query.correo, req.query.id);
    res.json(rta_cart);
    };


module.exports = {
    cartModel_delete
};
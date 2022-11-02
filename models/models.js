const { favMode_delete } = require("./favMode_delete");
const { favModel } = require("./favModel");
const { favModel_insert } = require("./favModel_insert");
//////// FAV IMPORTS 
const { cartModel } = require("./cartModel");
const { cartModel_post } = require("./cartModel_post");
const { cartModel_delete } = require("./cart_Model_delete");

//////// CART IMPORTS 
const { myValidacion } = require("./ideas_tomadas_get");
const { ideaTomadaModel } = require("./idea_tomada_get");
const { todasIdeas } = require("./todas_ideas_get");



module.exports = {
    myValidacion,
    todasIdeas,
    ideaTomadaModel,
    cartModel,
    cartModel_post,
    cartModel_delete,
    favModel,
    favMode_delete,
    favModel_insert
    
    
}
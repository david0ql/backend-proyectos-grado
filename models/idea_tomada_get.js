const { ideaTomada } = require("../helpers/helpers");
const UserValidation = require("../classes/response_user_validation");
const { response, query } = require("express");

const ideaTomadaModel = async (req, res = response) => {
const queryIdeaTomada = await ideaTomada();
res.json(queryIdeaTomada);
};

module.exports = {
    ideaTomadaModel
};

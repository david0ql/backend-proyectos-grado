const { obtenerIdea } = require("../helpers/helpers");
const UserValidation = require("../classes/response_user_validation");
const { response } = require("express");

const todasIdeas = async (req, res = response) => {
    
  const { email } = req.query;
  const correos_permitidos=[
    "correo.uts.edu.co",
    "uts.edu.co"
  ]; 
///////////////////////////////
  if (
    email &&
   correos_permitidos.includes(email.substring(email.lastIndexOf("@") + 1))
  ) {
    const rta = await obtenerIdea();
   

      return res.json(new UserValidation("", true, rta)) //SISI 
    
  } else {
    return (
      email.substring(email.lastIndexOf("@") + 1) != "correo.uts.edu.co" &&
      res.json(new UserValidation("2", false, "No pertenece al dominio"))
    );
  } 
  //EXIT IF 1
};

module.exports = {
  todasIdeas,
};

const { validacionUsuario } = require("../helpers/helpers");
const UserValidation = require("../classes/response_user_validation");
const { response } = require("express");

const myValidacion = async (req, res = response) => {
    
  const { email } = req.query;
///////////////////////////////
  if (
    email &&
    email.substring(email.lastIndexOf("@") + 1) == "correo.uts.edu.co"
  ) {
    const rta = await validacionUsuario();
    let resUser = 0;
    rta.forEach((element) => {
      if (element["correo"] === email) {
        resUser = 1;
      }

      //EXIT IF  2
      
    });
    return resUser == 1 //CONDITION RETURN
      ? res.json(new UserValidation("", true, "Bienvenido")) //SISI 
      : res.json(new UserValidation("3", false, "No te reconocemos")); //SINO
  } else {
    return (
      email.substring(email.lastIndexOf("@") + 1) != "correo.uts.edu.co" &&
      res.json(new UserValidation("2", false, "No pertenece al dominio"))
    );
  } 
  //EXIT IF 1
};

module.exports = {
  myValidacion,
};

const { obtenerIdea, obtenerIdeaProfesor } = require("../helpers/helpers");
const UserValidation = require("../classes/response_user_validation");
const { response } = require("express");

const todasIdeas = async (req, res = response) => {
  const { correo, correoProfesor } = req.body;
  const correos_permitidos = ["correo.uts.edu.co", "uts.edu.co"];
  ///////////////////////////////
  if (correo && correoProfesor) {
    const rta = await obtenerIdeaProfesor(correoProfesor);

    return validacioncorreo(correo, correos_permitidos)
      ? res.json(
          new UserValidation(
            "",
            validacioncorreo(correo, correos_permitidos),
            rta
          )
        )
      : res.json(
          new UserValidation(
            "1",
            validacioncorreo(correo, correos_permitidos),
            "No te reconocemos"
          )
        );
  } else {
    const rta = await obtenerIdea();

    validacioncorreo(correo, correos_permitidos)
      ? res.json(
          new UserValidation(
            "",
            validacioncorreo(correo, correos_permitidos),
            rta
          )
        )
      : res.json(
          new UserValidation(
            "1",
            validacioncorreo(correo, correos_permitidos),
            "No te reconocemos"
          )
        );
  }
  function validacioncorreo(correo, correos) {
    return correos.includes(correo.substring(correo.lastIndexOf("@") + 1));
  }
  //EXIT IF 1
};

module.exports = {
  todasIdeas,
};

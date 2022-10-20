const { connection } = require("../../conexion/conexion");

const ideaTomada = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT idea_tomada.id_idea_tomada, idea_tomada.estado, idea_tomada.estado_pago, idea_tomada.cooldown, idea_tomada.id_azure_estudiante_correo, ideas.nombre_idea, idea_tomada.fecha_aceptado FROM idea_tomada INNER JOIN ideas on ideas.id_idea = idea_tomada.id_idea",
      [],
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};

module.exports = {
  ideaTomada
};

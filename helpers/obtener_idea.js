const { connection } = require("../conexion/conexion");

const obtenerIdea = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT ideas.id_idea, ideas.nombre_idea, ideas.id_azure_docente_correo, tipo_ideas.nombre, ideas.aprovado, ideas.fecha_creacion FROM ideas INNER JOIN tipo_ideas on tipo_ideas.id_tipo_idea = ideas.id_tipo_idea",
      [],
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};

module.exports = {
    obtenerIdea
};

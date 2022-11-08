const { connection } = require ("../../conexion/conexion") 

const obtenerIdea = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT ideas.id_idea, ideas.nombre_idea, ideas.id_azure_docente_correo, tipo_ideas.nombre, ideas.aprovado, ideas.fecha_creacion FROM ideas \
      INNER JOIN tipo_ideas on tipo_ideas.id_tipo_idea = ideas.id_tipo_idea WHERE ideas.aprovado = 1",
      [],
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};
const obtenerIdeaProfesor = (correo) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT ideas.id_idea, ideas.nombre_idea, ideas.id_azure_docente_correo, tipo_ideas.nombre, ideas.aprovado, ideas.fecha_creacion FROM ideas 
      INNER JOIN tipo_ideas on tipo_ideas.id_tipo_idea = ideas.id_tipo_idea WHERE ideas.aprovado = 1 
      AND ideas.id_azure_docente_correo = ?`, 
      [correo],
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};


module.exports = {
    obtenerIdea,
    obtenerIdeaProfesor
};

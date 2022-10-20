const { connection } = require ("../../conexion/conexion") 

const validacionUsuario = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM usuarios_administrativos",
      [],
      function (error, results, fields) {
        resolve(results);
        reject(error);
      }
    );
  });
};

module.exports = {
    validacionUsuario
};

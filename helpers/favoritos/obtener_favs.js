const { connection } = require ("../../conexion/conexion") 

const obtenerFav = (email) => {
    return new Promise((resolve, reject) => {
    connection.query(`SELECT  ideas_favoritas.id_ideaFav, ideas_favoritas.id_idea, ideas_favoritas.correo_estudiante
      FROM ideas_favoritas
      INNER JOIN ideas ON
      ideas_favoritas.id_idea = ideas.id_idea 
      WHERE ideas_favoritas.correo_estudiante = ?`, [email],
            function (error, results, fields) {
                resolve(results);
                reject(error);
            }
        );
    });
};

module.exports = {
    obtenerFav
}

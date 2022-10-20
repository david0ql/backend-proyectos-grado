const { connection } = require ("../../conexion/conexion") 

const insertCart = (email, id_idea) => {
    return new Promise((resolve, reject) => {
        connection.query (`INSERT INTO carrito  (correo_estudiante, id_idea)
        values (?,?)`,
        [email,id_idea],
        function (error, results, fields) {
          resolve (results);
          reject(error);      
        }    

        );
    });
};

module.exports = {
    insertCart
} 
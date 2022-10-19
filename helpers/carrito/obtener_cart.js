const { connection } = require ("../../conexion/conexion") 

const obtenerCart = (email) => {
    return new Promise((resolve, reject) => {
        connection.query (`SELECT ideas.nombre_idea, carrito.id_carrito, carrito.correo_estudiante, carrito.id_idea
        FROM carrito  
        INNER JOIN ideas ON
        carrito.id_idea = ideas.id_idea
        Where carrito.correo_estudiante = ? 
        `,
        [email],
        function (error, results, fields) {
          resolve (results);
          reject(error);      
        }    

        );
    });
};

module.exports = {
    obtenerCart
} 
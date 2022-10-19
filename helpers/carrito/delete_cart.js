const { connection } = require ("../../conexion/conexion") 

const deleteCart = (id_cart) => {
    return new Promise((resolve, reject) => {
        connection.query (`DELETE FROM carrito WHERE id_carrito = ?` 
        ,
        [id_cart],
        function (error, results, fields) {
          resolve (results);
          reject(error);      
        }    

        );
    });
};

module.exports = {
    deleteCart
} 
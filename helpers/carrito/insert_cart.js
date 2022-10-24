const { connection } = require ("../../conexion/conexion") 

const validation = (email) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT carrito.* 
    FROM carrito 
    WHERE carrito.correo_estudiante = ?`,
            [email],
            function (error, results, fields) {
                resolve(results)
                reject(error)
            })

    })

}
const mrInsertCart = async (email, id_idea) => {

    const rta = await validation(email);
    return (rta.length == 0)
        ? insertCart(email, id_idea)
        : {
            error: "Solo puede tener una idea en el carrito "
        };
} 
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
    mrInsertCart
} 
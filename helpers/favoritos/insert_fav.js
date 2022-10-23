const { connection } = require ("../../conexion/conexion") 

const insertFav = (id_idea, email) => {

    return new Promise((resolve, reject) => {

        connection.query(`INSERT INTO ideas_favoritas  (correo_estudiante, id_idea)
    values (?,?)`,
            [id_idea, email],
            function (error, results, fields) {
                resolve(results)
                reject(error)
            })

    })
}
module.exports = {
    insertFav
}


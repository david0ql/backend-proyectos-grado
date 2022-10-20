const { connection } = require ("../../conexion/conexion") 
const validation = (correo_estudiante) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT ideas_favoritas.* 
    FROM ideas_favoritas 
    WHERE ideas_favoritas.correo_estudiante = ?`,
            [correo_estudiante],
            function (error, results, fields) {
                resolve(results)
                reject(error)
            })

    })

}
const mrInsertFavs = async (correo, id_idea) => {

    const rta = await validation(correo);
    return (rta.length == 0)
        ? insertFav(id_idea, correo)
        : {
            error: "Solo puede tener 1 idea favorita"
        };
}
const insertFav = (id_idea, correo) => {

    return new Promise((resolve, reject) => {

        connection.query(`INSERT INTO ideas_favoritas  (correo_estudiante, id_idea)
    values (?,?)`,
            [correo, id_idea],
            function (error, results, fields) {
                resolve(results)
                reject(error)
            })

    })
}
module.exports = {
    mrInsertFavs
}


const { obtenerFav} = require ('./obtener_favs.js')
const { deleteFav} = require ('./delete_favs.js')
const { insertFav } = require ('./insert_fav.js')

module.exports = {
    obtenerFav,
    deleteFav,
    insertFav
}
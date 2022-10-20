const { connection } = require ("../../conexion/conexion") 

const deleteFav = (id_ideaFav) => {
    return  new Promise((resolve, reject) => {

        connection.query (`DELETE FROM ideas_favoritas
        WHERE id_ideaFav = ? `, 
        [id_ideaFav],  
        function(error,results,fields) { 
             resolve (results)
             reject (error)
           
        });
        
    });
};

module.exports = {
    deleteFav
};
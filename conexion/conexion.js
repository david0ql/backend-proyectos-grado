const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cds_gestion_proyectos'
});
 
connection.connect();

module.exports = {
    connection
}
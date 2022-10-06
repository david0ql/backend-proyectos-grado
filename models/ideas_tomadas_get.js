const { validacionUsuario } = require('../helpers/helpers');
const UserValidation = require('../classes/response_user_validation');
const myValidacion = async (email) => {
    if (email && email.substring(email.lastIndexOf("@") + 1 ) == "correo.uts.edu.co") {
        const rta = await validacionUsuario();
        let resUser = 0 ;
        rta.forEach(element => {
            if (element['correo'] === (email)) {
                resUser = 1;
            }
        });
       return (resUser == 1) 
       ? new UserValidation( "", true, "Bienvenido" )
       : new UserValidation( "3",false,"No eres bienvenido" ); 
    } else {
        return (email.substring(email.lastIndexOf("@") + 1 ) != "correo.uts.edu.co") && new UserValidation("2", false, "No es admin")
    }
}

module.exports = {
    myValidacion
}
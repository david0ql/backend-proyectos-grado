
const { validacionUsuario } = require('./validacion_usuario');
const { obtenerIdea, obtenerIdeaProfesor } = require('./obtener_idea');
const { ideaTomada } = require('./idea_tomada');


module.exports = {

    validacionUsuario,
    obtenerIdea,
    ideaTomada,
    obtenerIdeaProfesor
}
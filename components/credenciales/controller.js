const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

const store = require('./store');

/**
 * Da formato a la informacion de usuario y lo crea si no existe
 * @param {Object} data Informacion del usuario
 * @param {Number} user Usuario que crea
 * @returns Usuario creado
 */
 async function crear(user, data) {
    if (!data.nombre || !data.apellido || !data.documento || !data.nivel) {
        throw boom.badRequest();
    }
    for (let llave in data) {
        nuevallave = `CRE_C${llave.toUpperCase()}`;
        if (nuevallave != 'CRE_CNIVEL') data[nuevallave] = data[llave].toUpperCase();
        else data[nuevallave] = data[llave];
        delete data[llave];
    }

    const CRE_CUSUARIO = `${data.CRE_CNOMBRE}.${data.CRE_CAPELLIDO}`;
    const CRE_CDETALLE_REGISTRO = `Registrado por ${user.sub}`;
    const hash = await bcrypt.hash(data.CRE_CDOCUMENTO, 10);
    data = {
        ...data,
        CRE_CUSUARIO,
        CRE_CDETALLE_REGISTRO,
        CRE_CCONTRASENA: hash,
    }

    const nuevoUsuario = await store.crear(data);
    delete nuevoUsuario.CRE_CCONTRASENA;
    return nuevoUsuario;
}

module.exports = {
    crear
}
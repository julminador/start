const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');

const { config } = require('./../../config/config');
const credencialesStore = require('./../credenciales/store');

/**
 * Busca un usuario que coincida
 * @param {String} user Usuario
 * @param {String} password Contrasena
 * @returns {Object} Usuario en DB
 */
async function buscar(user, password) {
    if (!user || !password) {
        throw boom.badRequest();
    }
    const CRE_CUSUARIO = user;
    const usuario = await credencialesStore.buscar(CRE_CUSUARIO);
    if (!usuario) {
        throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, usuario.CRE_CCONTRASENA);
    if (!isMatch) {
        throw boom.unauthorized();
    }
    delete usuario.dataValues.CRE_CCONTRASENA;
    return usuario;
}

/**
 * Crea un token con el payload correspondiente al usuario
 * @param {Object} user Usuario
 * @returns Usuario y token firmado
 */
function signToken(user) {
    const payload = {
        sub: user.PKCRE_NCODIGO,
        role: user.CRE_CNIVEL
    }
    const token = jwt.sign(payload, config.jwtSecret);
    return {
        user,
        token
    };
}

module.exports = {
    buscar,
    signToken,
};
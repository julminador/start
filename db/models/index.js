const { Credencial, CredencialSchema } = require('../../components/credenciales/model');

function setupModels(sequelize) {
    Credencial.init(CredencialSchema, Credencial.config(sequelize));

    // Credencial.associate(sequelize.models);
}

module.exports = setupModels;
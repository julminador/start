"use strict";

const { CredencialSchema, CREDENCIALES_TABLE } = require('../../components/credenciales/model');

const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
    async up(queryInterface) {
        await queryInterface.createTable(CREDENCIALES_TABLE, CredencialSchema);

    },

    async down(queryInterface) {
        await queryInterface.dropTable(CREDENCIALES_TABLE);
    },
};
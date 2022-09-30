const { Model, DataTypes, Sequelize } = require('sequelize');

const CREDENCIALES_TABLE = 'tbl_rcredenciales';

const CredencialSchema = {
    PKCRE_NCODIGO: {
        field: 'PKCRE_NCODIGO',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    CRE_CUSUARIO: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CNIVEL: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CNOMBRE: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    CRE_CNOMBRE2:{
        allowNull: true,
        type: DataTypes.STRING,
    },
    CRE_CAPELLIDO: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CAPELLIDO2: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    CRE_CDOCUMENTO: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CCORREO: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CCAMPANA: {
        //allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CAREA: {
        //allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CGRUPO: {
        //allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CUNIDAD_ORGANIZATIVA: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CCONTRASENA: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CFECHA_REGISTRO: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    CRE_CFECHA_MODIFICACION: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    CRE_CDETALLE_REGISTRO: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    CRE_CESTADO: {
        allowNull: false,
        type: DataTypes.STRING(20),
        defaultValue: 'Activo',
    },
};

class Credencial extends Model {
    static associate(models) {

    };

    static config(sequelize) {
        return {
            sequelize,
            tableName: CREDENCIALES_TABLE,
            modelName: 'tbl_rcredenciales',
            createdAt: 'CRE_CFECHA_REGISTRO',
            updatedAt: 'CRE_CFECHA_MODIFICACION',
        }
    };
};

module.exports = { CREDENCIALES_TABLE, CredencialSchema, Credencial };
const { models } = require('./../../libs/sequelize');

const ESTADO1 = "Activo";
const ESTADO2 = "InActivo";

async function crear(data) {
    const user = await models.tbl_rcredenciales.create(data)
    return user;
}

async function buscar(CRE_CUSUARIO) {
    const rta = await models.tbl_rcredenciales.findOne({
        where: { CRE_CUSUARIO },
    })
    return rta;
}

module.exports = {
    crear,
    buscar,
}
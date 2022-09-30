const { Strategy } = require('passport-local');

const controller = require('./../../../components/auth/controller');

const LocalStrategy = new Strategy(async (username, password, done) => {
    try {
        const user = await controller.buscar(username, password);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});

module.exports = LocalStrategy;
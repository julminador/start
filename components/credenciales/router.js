const express = require('express');
const passport = require('passport');

const controller = require('./controller');

router.post('/',
    passport.authenticate('jwt', {session: false}),
    async (req, res, next) => {
        try {
            const body = req.body;
            const user = req.user;
            const nuevoUsuario = await controller.crear(user, body);
            res.status(201).json(nuevoUsuario)
        } catch (error) {
            next(error);
        }
    }
)

const router = express.Router();

module.exports = router;
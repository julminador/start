const express = require('express');
const passport = require('passport');

const controller = require('./controller');

const router = express.Router();

router.post('/login',
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
            const user = req.user;
            res.json(controller.signToken(user));
        } catch (error) {
            next(error);
        }
    }
)

module.exports = router;
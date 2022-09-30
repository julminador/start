const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const { engine } = require('express-handlebars');

const router = require('./routes');
const { config } = require('./config/config');
require('./utils/auth');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(express.json());

app.use(cors());
app.use(bodyParser.urlencoded({"extended": false}));
app.use(bodyParser.json());
app.use(config.publicRoute, express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),

}));
app.set('view engine', 'hbs');
app.use('/node_modules', express.static(__dirname + '/node_modules'))


router(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Server on ${config.host}:${config.port}`);
});
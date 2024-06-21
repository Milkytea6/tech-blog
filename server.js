const express = require('express');
const path = require('path')
const routes = require('./controllers');

const sequalize = require('./config/connection');
// Handlebars engine
const exphbs  = require('express-handlebars');
const hbs = exphbs.create({});



const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequalize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('NOW listening'))
});
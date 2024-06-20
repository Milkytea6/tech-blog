const express = require('express');
const path = require('path')
const routes = require('./controllers');

const sequalize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequalize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('NOW listening'))
});
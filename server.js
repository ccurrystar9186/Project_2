const express = require ('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require ('express-handlebars');
const PORT = 3001;
const app = express();


app.use(express.static('public'));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded( { extended: true}));

app.use(controllers);


sequelize.sync({force: false}).then(() => {
app.listen(PORT, () => {
    console.log("Now Listening on Port 3001");
})
});

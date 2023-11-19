const path = require('path');
const express = require('express');
const xphbs = require('express-handlebars');
const app = express();
const hbs = xphbs.create();

const routes = require("./controllers");


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});




app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));



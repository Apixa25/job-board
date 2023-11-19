const xphbs = require('express-handlebars');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const hbs = xphbs.create();


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




function steven() {
    console.log('steven is awesome!');
}
console.log(steven());




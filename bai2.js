let express = require('express');
let app = express();
let expressHBS = require('express-handlebars');

app.engine('.hbs', expressHBS.engine({extname: 'hbs', defaultLayout: 'index'}));

app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Hello World! - Page 1');
})

app.get('/bai2', (req, res) => {
    res.render('bai2');
})

app.listen(3000);
let url = require('url');
let express = require('express');
let app = express();
let expressHBS = require('express-handlebars');
let caculator = require('./caculator');

app.engine('.hbs', expressHBS.engine({extname: 'hbs'}));

app.set('view engine', '.hbs');
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('result', {showResult: false});
})
app.get('/caculator', (req, res) => {
    const parseUrl = url.parse(req.url, true);
    const querry = parseUrl.query;
    const firstNumber = parseFloat(querry.firstNumber);
    const seccondNumber = parseFloat(querry.seccondNumber);
    const operator = querry.operator;

    res.render('result', {
        helpers: {
            firstNumber() {
                return parseInt(firstNumber);
            },
            seccondNumber() {
                return parseInt(seccondNumber);
            },
            result() {
                return caculator.cclt(firstNumber, seccondNumber, operator)
            }
        },
        showResult: true,
    })
})

app.listen(3000);

// http.createServer((req, res) => {
//     const parseUrl = url.parse(req.url, true);
//     console.log(parseUrl)
//     if (parseUrl.pathname == '/') {
//         fs.readFile('bai3.html', (err, data) => {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//             return res.end();
//         })
//     }
//     else {
//         const querry = parseUrl.query;
//         const firstNumber = parseFloat(querry.firstNumber);
//         const seccondNumber = parseFloat(querry.seccondNumber);
//         const operator = querry.operator;

//         console.log(firstNumber, seccondNumber, operator);
//         // res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.readFile('bai3.html', (err, data) => {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//             res.write(`
//             <span>${caculator.cclt(firstNumber, seccondNumber, operator)}</span>
//             `);
//             return res.end();
//         })
//         // res.write(`
//         // <h1>Result</h1>
//         // <span>${caculator.cclt(firstNumber, seccondNumber, operator)}</span>
//         // `);

//         // res.end();
//     }

// }).listen(3000);
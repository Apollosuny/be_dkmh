const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const handleCookie = require('./handleCookie');
let a;
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.get('/get', (req, res) => {
    console.log(req.cookies.a);
    res.json({ cookie: req.cookies.a });
})

app.post('', (req, res) => {
    a = req.body;
    console.log(handleCookie(req.body));
    res
        .cookie('a', handleCookie(req.body), { httpOnly: true })
    res.send('Successfully')
})

app.post('/register', (req, res) => {
    console.log(req.body);
})

app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
})
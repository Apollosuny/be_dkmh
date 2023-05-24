const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(cors({ credentials: true, origin: '*' }));

app.use(cookieParser());

// app.get('/get', (req, res) => {
//     console.log(req.cookies.a);
//     res.json({ cookie: req.cookies.a });
// })

// app.post('', (req, res) => {
//     a = req.body;
//     console.log(handleCookie(req.body));
//     res.cookie('a', handleCookie(req.body), { httpOnly: false, secure: true, domain: 'https://fe-dkmh.vercel.app/' })
//     res.send('Successfully')
// })

app.post('/register', (req, res) => {
    console.log(req.body);
    if (req.body.cookie) 
    {
        res.send({ message: "Bạn đã đăng ký môn thành công", status: 200 });
    }
    else if (
        req.body.classes_registered === undefined || 
        req.body.guids_registered === undefined || 
        req.body.guids_registered.length === 0 ||
        req.body.classes_registered.length === 0
    ) {
        res.send({ message: "Có gì đó sai sai, hãy kiểm tra lại", status: 400 });
    }
    
})

app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000');
})
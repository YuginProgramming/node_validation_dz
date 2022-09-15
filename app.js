const express = require('express');
const upload = require('multer')();
const server = express();


server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./static'));

server.use(express.json());
server.use(express.urlencoded({extended:false}));

server.get('/', (req, res) => {
    res.render('main');
})

server.post('/test', upload.none(), (req, res) => {

    function validationN () {
        if(typeof(req.body.bio.name) == 'string') {
        console.log('string');
        } else {
            console.log('number')
        }
    }
    validationN();
    
    function validationS () {
        if(typeof(req.body.bio.surname) == 'string') {
        console.log('string');
        } else {
            console.log('number')
        }
    }
    validationS();

    console.log(req.body)
    res.end();
});


server.listen(3000);
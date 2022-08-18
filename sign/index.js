const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use("/public", express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/signup', function(req,res){
    res.render('signUp');
});

app.get('/signin', function(req,res){
    res.render('signIn');
});

app.get('/', function(req,res){
    res.render('home')
})

app.listen(port, ()=>{
    console.log('server port :', port)
})
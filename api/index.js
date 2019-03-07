var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 9002; // set the port for our app

var users = [
    {
        "name":"Joe Jones",
        "username":"joejones",
        "password":"password1",
        "userid":1
    },
    {
        "name":"Billy Murphy",
        "username":"billymurphy",
        "password":"password2",
        "userid":2
    },
    {
        "name":"Sally Smith",
        "username":"sallysmith",
        "password":"password3",
        "userid":3
    },
    {
        "name":"Jody Jenkins",
        "username":"jodyjenkins",
        "password":"password4",
        "userid":4
    }
];

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(morgan('dev'));

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
    res.json({
        message: 'YouVisit API 1.0'
    });
});

apiRouter.post('/user/login', function(req, res) {
  const { username, password } = req.body;

  let user = users.find(user => user.username === username && user.password === password);

  if (user) {
    let { password, ...cleanUserData } = user;
    res.json({ status: 1, message:'Login Success', ...cleanUserData });
  } else {
    res.json({ status: -1, message: 'Error : Invalid username or password' });
  }
});

apiRouter.post('/user/signup', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    res.json({
        status:1,
        username: username,
        message:"Signup Success",
        userid:5
    });

});

app.use('/api', apiRouter);

// START THE SERVER
// ===============================
app.listen(port);
console.log('YouVisit API running on ' + port);

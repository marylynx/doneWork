var Login = require('./login.js');
 
app.get('/login', function (req, res) {
    var login = new Login(req.param('username'), req.param('password'));
    login.on('error', function (error) {
        res.writeHead(500);
        res.end();
    });
    login.on('failure', function (reason) {
        if (reason == 'username') {
            res.end('Wrong username!');
        } else if (reason == 'password') {
            res.end('Wrong password!');
        }
    });
    login.on('success', function (data) {
        req.session.username = req.param('username');
        req.session.data = data;
        res.redirect('/userarea');
    });
    login.perform();
});
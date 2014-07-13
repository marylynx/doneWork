var Q = require('q');
 
...
 
 
app.get('/Qlogin', function (req, res) {
    Q.ninvoke('query', sql, 'SELECT 1 FROM users WHERE name = ?;', [ req.param('username') ])
});
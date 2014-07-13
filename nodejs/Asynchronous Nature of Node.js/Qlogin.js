.then(function (rows) {
    if (rows.length &lt; 1) {
        res.end('Wrong username!');
    } else {
        return Q.ninvoke('query', sql, 'SELECT 1 FROM users WHERE name = ? && password = MD5(?);', [ req.param('username'), req.param('password') ]);
    }
})

.then(function (rows) {
    if (rows.length &lt; 1) {
        res.end('Wrong password!');
    } else {
        return Q.ninvoke('query', sql, 'SELECT * FROM userdata WHERE name = ?;', [ req.param('username') ]);
    }
})

.then(function (rows) {
    req.session.username = req.param('username');
    req.session.data = rows[0];
    res.rediect('/userarea');
})
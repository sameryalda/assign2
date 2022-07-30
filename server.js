const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log('User accessed!');
    res.send('<h1>Users</h1>')
});

app.use('/', (req, res) => {
    console.log('In the middleware!');
    res.send('<h1>Hi</h1>')
});



app.listen(3000);
console.log('Server listening on port http://localhost:3000 ');




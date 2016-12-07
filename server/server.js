const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'a',
            age: '1'
        },
        {
            name: 'b',
            age: '2'
        },
        {
            name: 'c',
            age: '3'
        }
    ]);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

module.exports = {
    app
}
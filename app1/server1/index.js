const express = require('express');
// const os = require('os');

const app = express();

getUser = function () {
    return {id: (new Date()).getTime(), name: "Ivan"};
};

app.use(express.static('../client/build'));
app.get('/api/getUser', (req, res) => {
        res.send(getUser());
    });

app.get('/api/getUser2', (req, res) => {
        let a;
        res.send({id: "123", name: a.length});
    });

app.get('/api/getUser3', (req, res) => {
        process.exit(1);
        res.send(getUser());
    });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const express = require('express')
const app = express()
const port = 8080

app.use('/', express.static('../client/build', {
    index: "index.html"
}))

// app.get('/api/user', (req, res) => {
//     const user = {login: "Ivan", email: "ivandj@mail.ru"}
//     res.send(
//         'Current user is: ' + JSON.stringify(user) +
//         '<br/> req.headers: ' + JSON.stringify(req.headers)
//     );
// });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
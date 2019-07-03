const express = require('express');
// const os = require('os');

const app = express();

app.use(express.static('../client/build'));
// app.get('/api/getUser', (req, res) => {
//         const user: Login = new User();
//         user.id = os.userInfo().uid;
//         user.name = os.userInfo().username;
//         res.send(user);
//     });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

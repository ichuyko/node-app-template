const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const userId = 1234;

getUser = function () {
    return {id: (new Date()).getTime(), name: "Ivan"};
};

app.use(express.static('../client/build'));
app.use(bodyParser());

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




const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:root@localhost:3306/sequelize');

sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

const UserTable = sequelize.define('user', {
    // attributes
    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
}, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: false,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    tableName: 'user_' + userId
});

UserTable.sync({ force: false }).then((res) => {
    console.log('Table for user: ' + res.tableName);
});

app.post('/addUser', function(req, res) {
    var user = req.body;
    UserTable.create(user);
    // UserTable.sync({});
    res.send(user);
});

app.get('/getUsers', function(req, res) {
    UserTable.findAll().then(users => {
        res.send(JSON.stringify(users, null, 4));
    });
});

app.post('/deleteUser', function(req, res) {
    var user = req.body;
    UserTable.destroy({
        where: {
            id: user.id
        }
    }).then(() => {
        res.send(user + " Deleted!");
    });
});

app.post('/deleteUsers', function(req, res) {
    var userIds = req.body;
    userIds.forEach((id) => {
        UserTable.destroy({
            where: {
                id: id
            }
        });
    });
    res.send("Next users will be deleted: " + userIds.join(","));
});


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

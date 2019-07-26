import express from "express";
import {Request, Response} from "express";
import {Login} from "../../shared/Login";
import {User} from "../../shared/User";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser());

const getUser = (): User => {
    return {id: (new Date()).getTime().toString(), name: "Ivan"};
};

const getLogin = (): Login => {
    return {hash: (new Date()).getTime().toString(), email: "IvanDj@Mail.ru"};
};

app.use(express.static("../client/build"));

app.get("/api/getUser", (req: Request, res: Response) => {
        res.send(getUser());
});

app.get("/api/getLogin", (req: Request, res: Response) => {
        res.send(getLogin());
});


const userId = 1234;

const Sequelize = require('sequelize');
const tableOptions = {
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
    freezeTableName: true
};
const sequelize = new Sequelize('mysql://root:root@localhost:3306/sequelize');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err: any) => {
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
}, {...tableOptions, tableName: 'user_' + userId});

UserTable.sync({ force: false }).then((res: any) => {
    console.log('Table for user: ' + res.tableName);
});

app.post('/addUser', function(req, res) {
    const user: User = req.body;
    UserTable.create(user);
    res.send(user);
});

app.get('/getUsers', function(req, res) {
    UserTable.findAll().then((users: User[]) => {
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
    var userIds: number[] = req.body;
    userIds.forEach((id: number) => {
        UserTable.destroy({
            where: {
                id
            }
        });
    });
    res.send("Next users will be deleted: " + userIds.join(","));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

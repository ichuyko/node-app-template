import bodyParser from "body-parser";
import express from "express";
import {Request, Response} from "express";
import mysql, {Connection} from "mysql";
import {Login} from "../../shared/Login";
import {User} from "../../shared/User";

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

const connection: Connection = mysql.createConnection({
    database: "sequelize",
    host: "localhost",
    password: "rootroot",
    user: "root"
});
connection.connect();

app.get("/getUserss", function(req, res) {
    connection.query (
        "select * from ?? where deletedAt is NULL", [`user_${userId}`],
        // "select * from user_1234 where deletedAt is NULL",
        function(err, results, fields) {
            res.send(results);
        }
    );
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

import bodyParser from "body-parser";
import express from "express";
import {Request, Response} from "express";
import mysql, {Connection, FieldInfo, MysqlError} from "mysql";
import {User} from "shared/src/User";
import {Login} from "shared/src/Login";

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
        function(err: MysqlError | null, results: User[], fields: FieldInfo[] | undefined) {
            res.send(results);
            // res.send(results.map((user: User) => user.id).join(", "));
        }
    );
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

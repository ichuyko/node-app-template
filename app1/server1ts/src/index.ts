import express from "express";
import {Request, Response} from "express";
import {User} from "../../shared/User";
import {Login} from "../../shared/Login";

const app = express();

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

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

import express from "express";
import {Request, Response} from "express";
import {User} from "../../shared/User";

const app = express();

const getUser = (): User => {
    return {id: (new Date()).getTime().toString(), name: "Ivan"};
};

app.use(express.static("../client/build"));
app.get("/api/getUser", (req: Request, res: Response) => {
        res.send(getUser());

    });

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

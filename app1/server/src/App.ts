import {Request, Response} from "express";
import express from "express";
import {User} from "shared/src/types/User";

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("../client/build"));

app.get("/api/getUser", (req: Request, res: Response) => {
    const user: User = {id: new Date().getTime(), name: "UserName"};
    res.send(user);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

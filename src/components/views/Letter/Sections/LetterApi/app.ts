import express from "express";
const fs = require('fs');
const app: express.Application = express();

app.get( "/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("hello typescript express!");
    }
);

app.post('/send', (req, res) => {
    var Data = {
        User: req.body.user,
        Title: req.body.title,
        Contents: req.body.contents
    }
    fs.writeFile('/src/components/views/Letter/Sections/TempLetter/tep.json', JSON.stringify(Data), function (err: any) {
        if(err) {
            // 에러가 발생하면 500 코드를 반환시키고 에러 메시지를 출력해준다.
            console.log("err");
            res.status(500).send('Internal Server Error');
        }
        res.send('성공!');
    });
});


export default app;
const express = require('express');
const cors = require('cors');
const path = require("path");
const mongoose = require('mongoose');
const config = require("./config/key");
const cron = require('node-cron');
const bodyParser = require("body-parser");
const { Letter } = require("./models/Letter");
const { Unit } = require("./models/Unit");
const SendLetter = require("./SendLetter");
const AutoSendNews = require("./AutoSendNews");
const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {

    // Set static folder
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("front/build"));

    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../front", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
});

const connect = mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
/*
let corsOptions = {
    origin: 'https://dongyoung-bootcamp.herokuapp.com/',
    credentials: true
}

app.use(cors(corsOptions))
*/

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello express')
});

app.post("/api/letter", async (req, res) => {
    const letter = new Letter(req.body)
    await letter.save((err) => {
        if (err) {
            return res.status(400).json({ success: false, err })
        } else {
            SendLetter.Send();
            return res.status(200).json({ success: true })
        }
    })
});

app.post('/api/setting', (req, res) => {
    Unit.findOneAndUpdate({ setting: "setting" }, { unit: req.body.unit }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
})

app.get('/getLetters', (req, res) => {
    console.log("getLetters")
    let findArgs = {};
    Letter.find(findArgs)//괄호가 빈칸이면 모든 정보를 가져오는 것
        .exec((err, letterInfo) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true, letterInfo,
                postSize: letterInfo.length//배열 길이가 총 게시글의 개수
            })
        })
})

app.get('/getUnit', (req, res) => {
    console.log("getUnit")
    let findArgs = {};
    Unit.findOne(findArgs)//괄호가 빈칸이면 모든 정보를 가져오는 것
        .exec((err, unitInfo) => {
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true, unitInfo
            })
        })
})

app.post('/sendToTrue', (req, res) => {
    console.log("sendToTrue")
    Letter.findOneAndUpdate({ _id: req.body._id }, { send: true }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
})

if (process.env.NODE_ENV === "production") {

    // Set static folder
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("front/build"));

    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../front", "build", "index.html"));
    });
}

// node-cron
cron.schedule('20 21 * * *', async function(){
    console.log('node-cron 실행 테스트');
});

cron.schedule('0 12 * * * ', async function(){ // 매일 12시 0분에 실행.
    console.log('node-cron 편지 테스트');
    await AutoSendNews.SendNews();
});


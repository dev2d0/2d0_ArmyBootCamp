const express = require('express');
const cors = require('cors');
const path = require("path");
const mongoose = require('mongoose');
const config = require("./config/key");
const cron = require('node-cron');
const bodyParser = require("body-parser");
const { Letter } = require("./models/Letter");
const { Private } = require("./models/Private");
const { Unit } = require("./models/Unit");
const SendLetter = require("./SendLetter");
const SendPrivateLetter = require("./SendPrivateLetter");
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

app.post("/api/privateLetter", async (req, res) => {
    const privateLetter = new Private(req.body)
    await privateLetter.save((err) => {
        if (err) {
            return res.status(400).json({ success: false, err })
        } else {
            SendPrivateLetter.Send();
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

app.get('/api/getUnit', (req, res) => {
    Unit.findOne({ setting: "setting" })
        .exec((err, unit) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, unit })
        })
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
    console.log('자동 인편 보내기');
    await AutoSendNews.SendNews();
});

cron.schedule('0 14 * * * ', async function(){ // 매일 14시 0분에 실행.
    console.log('실패한 인편 job 보내기');
    await SendLetter.Send();
    await SendPrivateLetter.Send();
});


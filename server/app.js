const express = require('express');
const cors = require('cors');
const fs = require('fs')
const mongoose = require('mongoose');
const config = require("./config/key");
const bodyParser = require("body-parser");
const { Letter } = require("./models/Letter");

const app = express();
app.use(bodyParser.json());

const connect = mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.get('/', (req, res) => {

    res.send('hello express')
});

app.post("/api/letter", (req, res) => {
    const letter = new Letter(req.body)
    letter.save((err) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({ success: true })
    })
});

app.get('/getLetters', (req, res) => {
    let findArgs = {};
    Letter.find(findArgs)//괄호가 빈칸이면 모든 정보를 가져오는 것
        .exec((err, letterInfo) => {//정상 동작 하면 travelInfo에 정보가 들어감
            if (err) return res.status(400).json({ success: false, err })
            return res.status(200).json({
                success: true, letterInfo,
                postSize: letterInfo.length//배열 길이가 총 게시글의 개수
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

app.use(cors())

if (process.env.NODE_ENV === "production") {

    // Set static folder
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("front/build"));

    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../front", "build", "index.html"));
    });
}

app.listen(3065, ()=> {
    console.log("서버 실헹 중")
})

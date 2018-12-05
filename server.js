const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 4000;

//This code is added by Prasanna Brabourame IS5442
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 1000000
}));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));

})

app.listen(port, () => console.log(`Listening on port ${port}`));
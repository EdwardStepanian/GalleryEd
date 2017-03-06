const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/', express.static(path.join(__dirname ,'/../dist')));

app.listen(port,function () {
    console.log('App listening on port 3000');
});

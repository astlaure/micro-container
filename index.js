const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'bin')));

app.listen(3001, () => {
    console.log('server started on port 3001.');
});
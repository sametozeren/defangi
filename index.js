const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const ConsoleResult = require('./messages/ConsoleResult');
const {
    UserRoutes
} = require('./routes/index');

require('./mongodb-connection');

app.use(bodyParser.json());
app.use(cors());

app.use('/user', UserRoutes);

app.get('/', (req, res) => {
    res.send('<h1>DEFANGİ API</h1>');
});

app.listen(process.env.PORT || 3000, () => {
    ConsoleResult.success('Server listening');
});
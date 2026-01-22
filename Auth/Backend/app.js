const express = require('express');
const connectDb = require('./config/db');
const cors = require('cors');

const app = express();

connectDb();

app.use(cors());
app.use(express.json());

app.use('/users', require('./router/authrouter'));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

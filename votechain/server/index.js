const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config({path: './config.env'});

const app = express();
const port = 5000;

app.use(cors())
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
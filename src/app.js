const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

require('dotenv').config();

const aiRoutes = require('./routes/ai.routes.js');
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world!");
})

app.use("/ai",aiRoutes)


module.exports = app;
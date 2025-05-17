const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const corsOptions = {
  origin: 'https://ai-code-reviewer-fronted.vercel.app', 
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions)); 
app.use(express.json());

const aiRoutes = require('./routes/ai.routes.js');

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.use("/ai", aiRoutes);

module.exports = app;

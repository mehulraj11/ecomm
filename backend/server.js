const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/connectDB');
const auth = require('./routes/auth');

dotenv.config();
const app = express();
connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("hello there!"));
app.use("/api/auth", auth);

app.listen(process.env.PORT, () => {
    console.log("server is running on port : ", process.env.PORT);
})
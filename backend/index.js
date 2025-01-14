const express = require('express');
const { connectDB } = require('./config/database');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const corsoptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsoptions));

const PORT = process.env.PORT ||8080;

app.get("/test", (req, res) => {
    res.send("Welcome to my site");
});



// routes
app.use('/api/user', require('./routes/users.routes'));
app.use('/api/message', require('./routes/messages.routes'));


app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}.`);
});
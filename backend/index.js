const express = require('express');
const { connectDB } = require('./config/database');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT ||8080;





// routes
app.use('/api/user', require('./routes/users.routes'));
app.use('/api/message', require('./routes/messages.routes'));


app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}.`);
});
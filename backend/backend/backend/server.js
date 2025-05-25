const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();
app.use(express.json());

app.use('/api/books', require('./routes/books'));

app.listen(5000, () => console.log("Server started on port 5000"));

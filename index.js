// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://noor11809027:noor11809027@cluster0.cdxk0kh.mongodb.net/BookStore?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Use the routes
app.use('/', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

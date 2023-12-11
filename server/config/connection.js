require('dotenv').config();
const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/quest-log_db`, {
  useNewUrlParser: true,  // This is now default and can be omitted
  useUnifiedTopology: true,  // This is now default and can be omitted
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;

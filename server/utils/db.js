const mongoose = require('mongoose');


const URI = process.env.MONGODB_URI;
mongoose.connect(URI);


const connectDb = async () => {
    try {
      await mongoose.connect(URI);
      console.log('Connected to DB');
    } catch (error) {
      console.error('Connection to DB failed');
        process.exit(0);
    }
};

module.exports = connectDb;


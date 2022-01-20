const mongoose = require('mongoose');

let mongoURI = '';

if (process.env.NODE_ENV === 'production') {
	mongoURI = process.env.DB_URL;
} else {
	mongoURI = 'mongodb://localhost/Project3';
}

mongoose.connect(mongoURI);

module.exports = mongoose;

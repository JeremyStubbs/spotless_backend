// connection
const mongoose = require('../db/connection');

const SongSchema = mongoose.Schema({
	title: String,
	artist: String,
	artistLink: String,
	album: String,
	albumLink: String,
	duration: String,
	trackLink: String,
	preview: String,
	picture: String,
	genre: String,
});

// model
const Song = mongoose.model('Song', SongSchema);

// export
module.exports = Song;

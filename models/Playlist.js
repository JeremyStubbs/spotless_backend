// connection
const mongoose = require('../db/connection');

const PlaylistSchema = mongoose.Schema({
	name: String,
	songs: Array,
});

// model
const Playlist = mongoose.model('Playlist', PlaylistSchema);

// export
module.exports = Playlist;

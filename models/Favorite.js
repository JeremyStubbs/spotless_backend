// connection
const mongoose = require('../db/connection');

// schema
const FavoriteSchema = mongoose.Schema({
	songs: Array,
});

//model
const Favorite = mongoose.model('Favorite', FavoriteSchema);

//export
module.exports = Favorite;

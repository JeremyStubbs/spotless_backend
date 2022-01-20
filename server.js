//Middleware
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const songsController = require('./controllers/songs');
const favoritesController = require('./controllers/favorites');
const playlistController = require('./controllers/playlists');

// Middleware configuration
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: false }));
app.use('/songs', songsController);
app.use('/favorites', favoritesController);
app.use('/playlists', playlistController);

// Default Route
app.get('/', (req, res) => {
	res.json({
		status: 200,
		msg: 'Nothing to see here...',
	});
});


app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

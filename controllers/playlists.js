const express = require('express');
const router = express.Router();
const Playlist = require('../models/Playlist');

//Get all
router.get('/', (req, res) => {
	Playlist.find()
		.then((playlists) => {
			res.json({ status: 200, playlists: playlists });
		})
		.catch((err) => {
			console.log(err);
		});
});

//Get by name
router.get('/:name', (req, res) => {
	Playlist.find({ name: req.params.name })
		.then((playlists) => {
			res.json({ status: 200, playlists: playlists });
		})
		.catch((err) => {
			console.log(err);
		});
});

//CREATE
router.post('/', (req, res) => {
	Playlist.create(req.body)
		.then((playlist) => {
			res.json({ status: 201, playlist: playlist });
		})
		.catch((err) => {
			console.log(err);
		});
});

// DELETE
router.delete('/:name', (req, res) => {
	Playlist.findOneAndDelete({ name: req.params.name })
		.then(() => res.status(204).json())
		.catch((err) => {
			console.log(err);
		});
});

// router.delete('/:id', (req, res) => {
// 	Playlist.deleteOne({ _id: req.params.id })
// 		.then(() => res.status(204).json())
// 		.catch((err) => {
// 			console.log(err);
// 		});
// });

//PUT by name
router.put('/:name', async (req, res) => {
	//name is favorite and returns favorites playlist
	const data = await Playlist.findOne({ name: { $in: req.params.name } });
	//combine playlist in database with new arrray in req body
	let newlist = data.songs.concat(req.body);
	//put new array in object
	let list = { name: 'favorites', songs: newlist };
	//Update database
	Playlist.findOneAndUpdate({ name: req.params.name }, list, { new: true })
		.then((playlist) =>
			res.status(200).json({ status: 200, playlist: playlist })
		)
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;

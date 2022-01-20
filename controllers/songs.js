const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

//INDEX
router.get('/', (req, res) => {
	Song.find()
		.then((songs) => {
			res.json({ status: 200, songs: songs });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/:genre', async (req, res) => {
	//declare empty array
	let y = [];
	//Get all matching values database
	const data = await Song.find({ genre: { $in: req.params.genre } });
	//randomly chose 15, populate y
	for (let i = 0; i < 15; i++) {
		let randomIndex = Math.floor(Math.random() * data.length);
		y.push(data[randomIndex]);
	}
	//return y in message
	res.json({
		status: 200,
		songs: y,
	});
});

//CREATE
router.post('/', (req, res) => {
	Song.create(req.body)
		.then((song) => {
			res.json({ status: 201, song: song });
		})
		.catch((err) => {
			console.log(err);
		});
});

//DELETE /:id
router.delete('/:id', (req, res) => {
	Song.deleteOne({ _id: req.params.id })
		.then(() => res.status(204).json())
		.catch((err) => {
			console.log(err);
		});
});

//PUT /:id
router.put('/:id', (req, res) => {
	Song.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((song) => res.status(200).json({ status: 200, song: song }))
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;

//did not use this database
const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');

//INDEX
router.get('/', (req, res) => {
	Favorite.find()
		.then((favs) => {
			res.json({ status: 200, favs: favs });
		})
		.catch((err) => {
			console.log(err);
		});
});

//CREATE
router.post('/', (req, res) => {
	Favorite.create(req.body)
		.then((fav) => {
			res.json({ status: 201, fav: fav });
		})
		.catch((err) => {
			console.log(err);
		});
});

//DELETE /:id
router.delete('/:id', (req, res) => {
	Favorite.deleteOne({ _id: req.params.id })
		.then(() => res.status(204).json())
		.catch((err) => {
			console.log(err);
		});
});

//PUT /:id
router.put('/:id', (req, res) => {
	Favorite.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((fav) => res.status(200).json({ status: 200, fav: fav }))
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;

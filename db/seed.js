const Song = require('../models/Song');

const seedData = require('./seedData.json');

Song.deleteMany({}).then(() => {
	Song.insertMany(seedData, (err) => {
		if (err) {
			console.log('err');
		} else {
			console.log('seed done');
		}
		process.exit();
	});
});

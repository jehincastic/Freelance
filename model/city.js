const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
	id: {
		type: String,
		unique: true,
		required: true
	},
	branches: [String]
});

module.exports = mongoose.model('City', CitySchema);

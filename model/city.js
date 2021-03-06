const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
	id: {
		type: String,
		unique: true,
		required: true
	},
	branches: {
		type: [{
			branchName: {
				type: String
			},
			location: {
				type: String
			}
		}],
		default: []
	}
});

module.exports = mongoose.model('City', CitySchema);

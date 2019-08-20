const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema({
    city: { type: String, unique: true },
    branches: [String]
});

module.exports = mongoose.model("City", CitySchema);
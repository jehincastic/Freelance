const express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	cityRoutes = require('./routes/city'),
	keys = require('./keys/keys'),
	app = express();

mongoose.connect(keys.DBlink, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/city', cityRoutes);

app.listen(4000, function() {
	console.log('Listening on 4000');
});

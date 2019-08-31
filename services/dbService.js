const City = require('../model/city');

const create = newCity => {
	return new Promise((resolve, reject) => {
		City.create(newCity, (err, city) => {
			if (err) {
				reject({
					status: 'Failed',
					message: err
				});
			} else {
				resolve({
					city,
					message: 'City Added Successfully',
					status: 'Success'
				});
			}
		});
	});
};

const find = city => {
	return new Promise((resolve, reject) => {
		City.find(city)
			.then(result => {
				resolve({
					result,
					status: 'Success'
				});
			})
			.catch(err => {
				reject({
					status: 'Failed',
					message: err
				});
			});
	});
};

const deleteRecord = id => {
	return new Promise((resolve, reject) => {
		City.deleteOne({ _id: id })
			.then(() => {
				resolve({
					status: 'Success',
					message: 'Record Deleted Successfully'
				});
			})
			.catch(err => {
				reject({
					status: 'Failed',
					message: err
				});
			});
	});
};

module.exports = {
	create,
	find,
	deleteRecord
};

const express = require("express"),
      router = express.Router(),
      City = require("../model/city");

router.post("/new", (req, res) => {
    const newCity = req.body;
    City.create(newCity, (err, city) => {
        if (err) {
            res.json({
                status: err
            });
        } else {
            res.json({
                city,
                message: "City Added Successfully"
            })
        }
    });
});

router.get("/view", (req, res) => {
    City.find()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json({
                status: err
            });
        });
});

module.exports = router;
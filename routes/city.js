const express = require("express"),
      router = express.Router(),
      db = require("../services/dbService");

router.post("/new", (req, res) => {
    const id = req.body.id;
    const branches = req.body.branches || [];
    const newCity = {
	id,
	branches
    };
    if(id) {
    	db.create(newCity)
	    .then(msg => res.status(200).json(msg))
	    .catch(err => res.json(err));
    } else {
	res.status(400).json({
		status: "Failed",
		message: "Invalid Inputs"
	});
    }
});

router.get("/view", (req, res) => {
    db.find({})
	.then(result => {
	    if(result['result'].length > 0) {
	    	res.status(200).json(result);
	    } else {
		res.status(404).json({
		    status: "Failed",
		    message: "No Record Found"
		});
	    }
	})
	.catch(err => res.json(err));
});

router.get("/view/:id", (req, res) => {
    const id = req.params.id;
    db.find({_id: id})
	.then(result => {
            if(result['result'].length > 0) {
                res.status(200).json(result);               } else {                                            res.status(404).json({                              status: "Failed",                               message: "No Record Found"
                });
	    }
	})                                              .catch(err => res.json(err));
});

router.put("/update/:id", (req, res) => {
    const _id = req.params.id;
    const id = req.body.id;
    const branches = req.body.branches;
    if(id) {
    	db.find({_id: _id})
	    .then(result => {
		if(result['result'].length > 0) {
	    	    const data = result['result'][0];
	    	    data['id'] = id;
	    	    data['branches'] = branches;
	    	    data.save()
		    	.then(() => {
		    	    res.status(200).json({
			    	status: "Success",
			    	message: "Record Updated Successfuly"
		    	    })
		    	})
		    	.catch(err => {
		    	    res.json({
			    	status: "Failed",
			    	message: err
		    	    });
		    	});
		} else {                                            res.status(404).json({                              status: "Failed",                               message: "No Record Found"                  });
		}
	    })
	    .catch(err => {
		res.json({
	 	    status: "Failed",
		    message: err
	   	 });
	    });
    } else {
	res.status(400).json({
            status: "Failed",
            message: "Invalid Inputs"
        });
    }
});

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.find({_id: id})
	.then(result => {
	    if(result['result'].length > 0) {
	    	db.deleteRecord(id)
        	    .then(result => {
            	    	res.status(200).json(result);
        	    })
        	    .catch(err => {                                    	res.json(err);
        	    });
	    } else {                                           res.status(404).json({                              status: "Failed",                               message: "Record Not Found"                 });
	    }
	})
        .catch(err => res.status(404).json(err));
});

module.exports = router; 

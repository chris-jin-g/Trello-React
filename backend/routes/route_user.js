const router = require('express').Router();
// let tbl_user = require('../models/user.model');
let db = require('../models');
const validateEmail = require("../validation/validateEmail");
const validatePassword = require("../validation/validatePassword");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.route('/login').post((req, res) =>{
	// validation
	const { emailerrors, emailisValid } = validateEmail(req.body.email);
	// Check Email validation
    if (!emailisValid) {
    	return res.status(400).json(emailerrors);
    }

    const { passworderrors, passwordisValid } = validatePassword(req.body.password);
    // Check Password validation
    if (!passwordisValid) {
    	return res.status(400).json(passworderrors);
    }

    
    const email = req.body.email;
  	const password = req.body.password;
  	// validate email or password
  	let regex = /[@]/g;
  	if (regex.test(email)) {
  		// Find user by email
	  	db.users.find({email: email})
	  		.then(userdata => {
	  			// Check if user exists
	  			if(!userdata[0]) {
	  				return res.status(400).json({emailnotfound: "There isn't an account for this email"});
	  			}

	  			// Check password
	  			bcrypt.compare(password, userdata[0].password).then(isMatch => {
			      if (isMatch) {
					//Find user boards
					db.userboards.find({userid: userdata[0]._id})
						.then(boarddata => {
							// User matched
					        // Create JWT Payload
					        const payload = {
					          id: boarddata[0].userid,
					          name: boarddata[0].username,
					          boards: boarddata[0].boards,
					          certification: userdata[0].certification
					        };

					        // Sign token
					        jwt.sign(
					          payload,
					          process.env.secretKey,
					          {
					            expiresIn: 31556926 // 1 year in seconds
					          },
					          (err, token) => {
					            res.json({
					              success: true,
					              token: "Bearer " + token
					            });
					          }
					        );
						}) 
			      } else {
			        return res
			          .status(400)
			          .json({ passwordincorrect: "Failed password" });
			      }
				});
	  		});
  	} else {
  		// Find user by name
	  	db.users.find({name: email})
	  		.then(userdata => {
	  			// Check if user exists
	  			if(!userdata[0]) {
	  				return res.status(404).json({emailnotfound: "There isn't an account for this username"})
	  			}

	  			// Check password
	  			bcrypt.compare(password, userdata[0].password).then(isMatch => {
			      if (isMatch) {
			        // User matched
			        // Create JWT Payload
			        const payload = {
			          id: userdata[0]._id,
			          name: userdata[0].name,
			          certification: userdata[0].certification
			        };

			        // Sign token
			        jwt.sign(
			          payload,
			          process.env.secretKey,
			          {
			            expiresIn: 31556926 // 1 year in seconds
			          },
			          (err, token) => {
			            res.json({
			              success: true,
			              token: "Bearer " + token
			            });
			          }
			        );
			      } else {
			        return res
			          .status(400)
			          .json({ passwordincorrect: "Failed password" });
			      }
				});
	  		});
  	}
  	

});

router.route('/signup').post((req, res) => {
	db.users.find({email: req.body.email})
		.then(userdata => {
			// check email exist
			if (userdata[0]) {
				return res.status(400).json({existEmail: "Hey, that email is already in use by another Atlassian account. You'll need to login with Atlassian to use Trello."})
			} else {
				const newUser = new db.users({
			        name: req.body.username,
			        email: req.body.email,
			        password: req.body.password,
			        certification: "2"
			    });

			    // Hash password before saving in database
			    bcrypt.genSalt(10, (err, salt) => {
			    	bcrypt.hash(newUser.password, salt, (err, hash) => {
			        	if (err) throw err;
			        	newUser.password = hash;
			        	newUser
			        		.save()
			        		.then(user => res.json("Add success!"))
			        		.catch(err => console.log(err));
			    	});
			    });

			}
		})
});

module.exports = router;
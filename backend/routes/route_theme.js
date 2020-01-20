const router = require('express').Router();
let db = require('../models');
const jwt = require("jsonwebtoken");

router.route('/gettheme').get((req, res) => {
	db.usertheme.find()
		.then(theme => {

			const newTheme = [];
			
			newTheme.push(theme[0].bctheme);
			newTheme.push(theme[0].bktheme);
			
			const payload = {
				theme: newTheme
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
		.catch(err => res.status(400).json(err));
});

module.exports = router;
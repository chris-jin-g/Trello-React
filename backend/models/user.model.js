const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	certification: {type: String, required: true}
});

const tbl_user = mongoose.model('user_tbl', userSchema);

module.exports = tbl_user;
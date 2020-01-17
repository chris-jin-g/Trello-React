const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
	name: {type: String, required: true},
	userid: {type: String, required: true},
	username: {type: String, required: true},
	useremail: {type: String, required: true},
	boards: {type: Array}
});

const tbl_user_board = mongoose.model('users_board_tbl', boardSchema);

module.exports = tbl_user_board;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardCollectionSchema = new Schema({
	userId: {type: String, required: true},
	boards: {type: Array}
});

const tbl_user_board_collection = mongoose.model('user_boards_collection', boardCollectionSchema);

module.exports = tbl_user_board_collection;
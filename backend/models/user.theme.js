const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const themeSchema = new Schema({
	bctheme: {type: Object, required: true},
	bktheme: {type: Object, required: true}
});

const tbl_user_theme = mongoose.model('theme_tbl', themeSchema);

module.exports = tbl_user_theme;
const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
		_id: mongoose.Schema.Types.ObjectId,
		title: String,
		content: String
}, {collection: 'cb_document'});

module.exports = mongoose.model('Document', DocumentSchema);

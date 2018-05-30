/** */
const Document = require('./../models/Document');

module.exports = {
		/**
  * get document list
  */
		getDocumentList: (req, res, next) => {
				Document
						.find()
						.limit(10)
						.exec((err, document) => {
								console.log(err);
								console.log(document);
								if (err) {
										res.send(err);
										next();
								} else if (!document) {
										res.send(404);
										next();
								} else {
										res.send(document);
										next();
								}
						});
		}
};

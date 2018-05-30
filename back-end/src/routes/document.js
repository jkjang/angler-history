const documentcontroller = require('./../controllers/document.ctrl');

module.exports = (router) => {
		/**
  * timeline document list
  */
		router
				.route('/documents')
				.get(documentcontroller.getDocumentList);
};

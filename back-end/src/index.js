/** require dependencies */
const express = require('express');
const routes = require('./routes/');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || 'mongodb://sysop:sysop@localhost:40000/cube_db1';

try {
		mongoose.connect(url, {});
} catch (error) {
		console.log(error);
}

const port = 5000 || process.env.PORT;

routes(router);

/** set middlewarees */
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

/** first  */
app.use('/api', router);

app.listen(port, () => {
		console.log(`Server started at port: ${port}`);
});

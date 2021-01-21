const express = require('express');
const path = require('path');
const routes = require('./routes');

module.exports = (config) => {
	const app = express();

	// app.use('/', express.static(path.join(__dirname, '../public')));

	app.use('/', routes());

	return app;
}
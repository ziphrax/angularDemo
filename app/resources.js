 var fortune = require('fortune')
	, fortuneAPI = fortune({
		adapter: 'mongodb',
		connectionString: 'mongodb://localhost/fortune1',
		db: 'fortune1',
		namespace: '/api'
	})
	.resource('Survey', {
		name: String,
		instructions: String,
		created: Date,
		lastUpdated: Date
	});

module.exports = fortuneAPI;

var login = require('./login.js');

login.client().get('search/tweets', {
	q: '#nodejs',
	result_type: 'recent',
	count: 50
}, function(err, tweets, resp) {
	var len = tweets.statuses.length;
	console.log(tweets.statuses[Math.floor(Math.random()*len)].text);
});

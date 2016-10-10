const twitterLogin = require('twitter-login');

twitterLogin.client().get('search/tweets', {

	q: '#nodejs',
	result_type: 'recent',
	count: 50

}, function(err, tweets) {

	if (err) {
		console.error(
			JSON.stringify(err, null, 4)
		);

		return;
	}

	var len = tweets.statuses.length;
	console.log(tweets.statuses[Math.floor(Math.random()*len)].text);
});

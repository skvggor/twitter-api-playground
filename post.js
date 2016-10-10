const twitterLogin = require('twitter-login');

twitterLogin.client().post('statuses/update', {

	status: process.argv[2]

}, function(err, tweet) {

	if (err) {
		console.error(
			JSON.stringify(err, null, 4)
		);

		return;
	}

	console.log('https://twitter.com/marcker/status/' + tweet.id_str);
});

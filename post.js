var twitterLogin = require('twitter-login');

twitterLogin.client().post('statuses/update', {
	status: 'Hello from #nodejs with Twitter REST API',
}, function(err, tweet, resp) {
	console.log(tweet);
});

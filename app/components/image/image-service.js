function ImageService(cb) {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		// ^^^^^^^ How do you call this function?
		$.get(apiUrl)
		.then(res => {
			res = JSON.parse(res)
			console.log('This thing is res:', res)
			callWhenDone(res.large_url)
			
		})
	
	}
	








}

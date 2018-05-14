function QuoteService(cb) {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	//Do Not Edit above we have to go through the bcw-getter to access this api

	//private

	function Quote(quote, author) {
		this.quote = quote
		this.author = author


	}

	// function loadQuote(){
	// 	$.get(url2).then(res=>{

	// 	cb(res.)})
	// }
	// //how to load quote? file path?
	// loadQuote()

	//public

	this.getQuote = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			console.log('Quote Data:', res)
			//Now What?
			callWhenDone(cb)
		})
	}





}

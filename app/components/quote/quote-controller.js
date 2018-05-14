function QuoteController() {

	var qs = new QuoteService()

	qs.getQuote(function (quote) {
		console.log('What is the quote', quote)
	})



	function drawQuote(quote) {
		var template = ""
		template += `<div>
	<h3>${Quote.quote}</h3>
	<h3>${Quote.author}</h3>
	</div>`
		document.getElementById("quote").innerHTML = template
	}
	qs.getQuote(drawQuote)














}

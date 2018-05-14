function QuoteController() {

	var qs = new QuoteService()

	// qs.getQuote(function (quote) {
	// 	drawQuote(quote)
	// })



	function drawQuote(quote) {
		debugger
		var template = `<div>
	<h3>${quote.quote}</h3>
	<h3>${quote.author}</h3>
	</div>`
		document.getElementById("quote").innerHTML = template
	}
	qs.getQuote(drawQuote)














}

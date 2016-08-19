$(document).ready(function(){
	$('nav a[title=Search]').click(function(){
		console.log('Search');
		$('#search input').focus().on("change keyup paste click", function(){
			// In a real environment we would send POST requests here.
			var query = $(this).val();
			if (query)
				$('#search h1').text('No results for ' + query);
			else
				$('#search h1').text('Start typing your query.');
		})
	})
});
var GetURLParameter = function(sParam){
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

var name = GetURLParameter('name');
console.log(name);
$('.card-name').html(name);
setInterval(function(){
	$('.card-name').show();
	setInterval(function(){
		$('.card-name').hide();
	}, 17750);
}, 46000);
var GetURLParameter = function(sParam){
	return decodeURI(
		(RegExp(sParam + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
	);
}

var name = GetURLParameter('name');
console.log(name);
$('.card-name').html(name);
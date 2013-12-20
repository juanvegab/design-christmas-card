var msj = "";
var count = 0;
var TOTAL_SECONDS = 76;
var SECOND_PERCENT = 100/TOTAL_SECONDS;

for(var i=1; i<=8; i++){
	if(i<7){
		msj+=((count + SECOND_PERCENT/4)) + "% {-webkit-transform: rotateY(-90deg); background: url('../images/"+i+".jpg'); -webkit-animation-timing-function: step-start;}\n";
		msj+=((count + SECOND_PERCENT/4))+0.1 + "% {-webkit-transform: rotateY(90deg);}\n";
		msj+=((count + SECOND_PERCENT/2)) + "% {-webkit-transform: rotateY(1deg);-webkit-animation-timing-function: ease-in;}\n";
		msj+=((count + SECOND_PERCENT*7)) + "% {-webkit-transform: rotateY(1deg);}\n";
		count += SECOND_PERCENT*7;
	}else{
		msj+=((count + SECOND_PERCENT/4)) + "% {-webkit-transform: rotateY(-90deg); background: url('../images/"+i+".jpg'); -webkit-animation-timing-function: step-start;}\n";
		msj+=((count + SECOND_PERCENT/4))+0.1 + "% {-webkit-transform: rotateY(90deg);}\n";
		msj+=((count + SECOND_PERCENT/2)) + "% {-webkit-transform: rotateY(1deg);-webkit-animation-timing-function: ease-in;}\n";
		msj+=((count + SECOND_PERCENT*17)) + "% {-webkit-transform: rotateY(1deg);}\n";
		count += SECOND_PERCENT*17;
	}

}

console.log(msj);
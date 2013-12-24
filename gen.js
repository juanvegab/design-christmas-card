var msj = "";
var count = 0;
var TOTAL_SECONDS = 58;
var SECOND_PERCENT = 100/TOTAL_SECONDS;

for(var i=1; i<=8; i++){
	if(i<7){
		msj+=((count + SECOND_PERCENT/4)) + "% {-webkit-transform: rotateY(-90deg); background: url('../images/"+i+".jpg'); -webkit-animation-timing-function: step-start;}\n";
		msj+=((count + SECOND_PERCENT/4))+0.1 + "% {-webkit-transform: rotateY(90deg);}\n";
		msj+=((count + SECOND_PERCENT/2)) + "% {-webkit-transform: rotateY(0deg);-webkit-animation-timing-function: ease-in;}\n";
		msj+=((count + SECOND_PERCENT*4)) + "% {-webkit-transform: rotateY(0deg);}\n";
		count += SECOND_PERCENT*4;
	}else{
		msj+=((count + SECOND_PERCENT/4)) + "% {-webkit-transform: rotateY(-90deg); background: url('../images/"+i+".jpg'); -webkit-animation-timing-function: step-start;}\n";
		msj+=((count + SECOND_PERCENT/4))+0.1 + "% {-webkit-transform: rotateY(90deg);}\n";
		msj+=((count + SECOND_PERCENT/2)) + "% {-webkit-transform: rotateY(0deg);-webkit-animation-timing-function: ease-in;}\n";
		msj+=((count + SECOND_PERCENT*18)) + "% {-webkit-transform: rotateY(0deg);}\n";
		count += SECOND_PERCENT*18;
	}

}

console.log(msj);


//-----------------------------------------

var msj = "\t0% {@include transform(rotateY(-90deg));}\n";
var count = 0;

var LONG_SLIDES_COUNT = 2;
var SHORT_SLIDES_COUNT = 6;
var LONG_SLIDE_TIME = 20;
var SHORT_SLIDE_TIME = 3;
var TRANSITION_TIME = 0.5;

var NUMBER_SLIDES = LONG_SLIDES_COUNT + SHORT_SLIDES_COUNT;
var TOTAL_SECONDS = ((SHORT_SLIDE_TIME+TRANSITION_TIME)*SHORT_SLIDES_COUNT) + ((LONG_SLIDE_TIME+TRANSITION_TIME)*LONG_SLIDES_COUNT) - 4;
var SECOND_PERCENT = 100/TOTAL_SECONDS;

for(var i=1; i<=(NUMBER_SLIDES); i++){
	if(i<(NUMBER_SLIDES-1)){
		msj+="\t" + ((count + SECOND_PERCENT/4)) + "% {@include transform(rotateY(-90deg)); background: url('../images/"+i+".jpg'); @include animation-timing-function(step-start);}\n";
		msj+="\t" + (((count + SECOND_PERCENT/4))+0.1) + "% {@include transform(rotateY(90deg));}\n";
		msj+="\t" + ((count + SECOND_PERCENT/2)) + "% {@include transform(rotateY(1deg));@include animation-timing-function(ease-in);}\n";
		msj+="\t" + ((count + SECOND_PERCENT*SHORT_SLIDE_TIME)) + "% {@include transform(rotateY(1deg));}\n";
		count += SECOND_PERCENT*SHORT_SLIDE_TIME;
	}else{
		msj+="\t" + ((count + SECOND_PERCENT/4)) + "% {@include transform(rotateY(-90deg)); background: url('../images/"+i+".jpg'); @include animation-timing-function(step-start);}\n";
		msj+="\t" + (((count + SECOND_PERCENT/4))+0.1) + "% {@include transform(rotateY(90deg));}\n";
		msj+="\t" + ((count + SECOND_PERCENT/2)) + "% {@include transform(rotateY(1deg));@include animation-timing-function(ease-in);}\n";
		msj+="\t" + ((count + SECOND_PERCENT*LONG_SLIDE_TIME)) + "% {@include transform(rotateY(1deg));}\n";
		count += SECOND_PERCENT*LONG_SLIDE_TIME;
	}

}
console.log(NUMBER_SLIDES);
console.log(TOTAL_SECONDS);
console.log(msj);
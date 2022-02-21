var min = 05;
var sec = 00;

var nowSec = 00;
var nowMin = 00;
var interval = null;
function timer(){

if(sec == 0){
    sec =60;
    min-- ;
}
else{
    sec-- ;
    document.querySelector('.sec').innerText = nowSec;
    document.querySelector('.min').innerText = nowMin;

}
if(min<10){
    nowMin = '0'+min
}
else{
    nowMin = min;
}
if(sec<10){
    nowSec = '0'+sec ;
}
else{
    nowSec = sec;
}

if( min == 0 && sec == 0 ){
    alert("TIME OVER");
    clearInterval(interval);
    min = 05;
    document.querySelector('.sec').innerText = 00;
    document.querySelector('.min').innerText = 00;
}

}

document.querySelector('.start').addEventListener('click',function(){

interval = setInterval(timer,1000);



});
document.querySelector('.reset').addEventListener('click',function(){

clearInterval(interval);
sec = 00;
min = 05;
document.querySelector('.sec').innerText = 00;
document.querySelector('.min').innerText = 05;


});


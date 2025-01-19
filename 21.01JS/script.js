
var number = prompt("Գրեք թիվ:");
if (number % 2 === 0) {
  alert("Այս թիվը զույգ է:");
} else {
  alert("Այս թիվը կենտ է:");
}

var number = prompt("Գրեք թիվ։");
if (number >= 0 && number <=9){
    alert("Միանիշ թիվ է");
}else if(number >=10 && number <=99){
    alert("Թիվը երկնիշ է");
}else if(number >=100 && number <=999){
    alert("Թիվը եռանիշ է");
}else if(number >=1000 && number <=9999){
    alert("Թիվը քառանիշ է");
}else if(number >=10000 && number <=99999 ){
    alert("Ձեր թիվը հնգանիշ է");
}else{
    alert("Ձեր թիվը բարձր է միլիոնից");
}

var number = prompt("Գրեք թիվ");
if(number <0 ){
    alert("Բացասական թիվ է");
}else if(number >=0){
    alert("Դրական թիվ է");
}

var number = prompt("Գրեք թիվ");
if(number % 1 === 0){
     alert("Այս թիվը կլոր է");
}else {
    alert("Տասնորդական թիվ է");
}


var mekGinkg = 300;
var qanak = prompt("Խնդրում ենք նշեք, թե քանի կգ խնձոր եք ցանկանում");
var yndhanurGin = qanak * mekGinkg;
alert("Դուք պետք է վճարեք " + yndhanurGin + " դրամ։");

var x = 0.03;
var zangvac = prompt("Խնդրում ենք նշել ձեր զանգվածը");
var jur = x * zangvac;
alert("Դուք պետք է խմեք օրական " + jur + " լիտր ջուր։");

var usdRate = 394;
var rubRate = 3.8;
var eurRate = 400;
var amountAMD = prompt("Խնդրում ենք մուտքագրել գումարը դրամով:");
var amountUSD = amountAMD / usdRate;
var amountRUB = amountAMD / rubRate;
var amountEUR = amountAMD / eurRate;
alert("Դրամի չափը՝ " + amountAMD + " դրամ:" +
    "- ԱՄՆ դոլար: " + amountUSD + " USD" +
    "- Ռուսական ռուբլի: " + amountRUB + " RUB" +
    "- Եվրո: " + amountEUR + " EUR");
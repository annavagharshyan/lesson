// var arr = [10,5,6,81,20,33,14,25,4,18,9,65,58,11,45,36,52,12];
// for(var a = 0; a < arr.length; a++){
//    if(arr[a] % 2 == 0){
//       console.log(arr[a]);
//    }
// }

// var arr = [25,15,4,6,88,35,11,6,74,65,28,16,21,17,9];
// for(var a = arr.length -1; a >= 0; a--){
//    console.log(arr[a]);
// }

// var arr = [2,4,6,7,9,5,8,18,11,21,14,32,10];
// var b = 0;
// for(var a = 0; a < arr.length; a++){
//    b = b + arr[a];
// }
// console.log(b);

var arr = [10,5,6,81,20,33,14,25,4,18,9,65,58,11,45,36,52,12];
    var b = 0;
    var d = 0;
for(var a = 0; a < arr.length; a++){
   if(arr[a] % 2 == 0){
      b = b + arr[a];
   }else if(arr[a] % 2 == 1){
      d = d + arr[a];
   }
   }
   if(b < d){
      alert(b +  " փոքր է " + d);
   }else{
      alert(b + " փոքր չէ " + d);
   }
console.log( b < d);
console.log(b);
console.log(d);

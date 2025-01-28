// var arr = [20, 15, 10, 25, 45, 17, 30, 44, 8, 79];
// var k = 0;
// for (var a = 0; a < arr.length; a++) {
//     var c = 1;  
//     for (var b = 2; b < arr[a]; b++) {  
//         if (arr[a] % b == 0) {  
//           c++;  
//         }  
//     }  
//     if (c == 1) { 
//       k = k + arr[a];
//     }
//   }
// console.log(k);

var arr = [16, 14, 45, 32, 75, 11, 89, 20, 18, 71, 7, 26, 32, 19, 28];
var t = 0;
for (var a = 0; a < arr.length; a++) {
    var c = 0;
    for (var b = 2; b < arr[a]; b++) {
        if (arr[a] % b == 0) {
          c++;
        }
      }
    if (c !== 0) {
        var f = arr[t];
        arr[t] = arr[a];
        arr[a] = f;
        t++;
      }
  }
arr.length = t;
console.log(arr);

var people = [
    { name: "Արամ", age: 25, city: "Հայաստան", occupation: "Ծրագրավորող" },
    { name: "Մարիամ", age: 32, city: "Գերմանիա", occupation: "Բժիշկ" },
    { name: "Հրանտ", age: 35, city: "Վրաստան", occupation: "Մարզիչ" },
    { name: "Լիլիթ", age: 30, city: "Հայաստան", occupation: "Դիզայներ" },
    { name: "Անահիտ", age: 18, city: "Հայաստան", occupation: "Մասնագետ" },
    { name: "Վահե", age: 23, city: "Իտալիա", occupation: "Մանկավարժ" },
    { name: "Միքայել", age: 31, city: "Բելգիա", occupation: "Արտադրող" },
    { name: "Աննա", age: 20, city: "Հայաստան", occupation: "Գրող" },
    { name: "Սարգիս", age: 31, city: "ԱՄՆ", occupation: "Արտադրական ղեկավար" },
    { name: "Սոնա", age: 25, city: "Իսպանիա", occupation: "Լրագրող" },
    { name: "Դավիթ", age: 29, city: "Ֆրանսիա", occupation: "Իրավաբան" },
    { name: "Նարինե", age: 21, city: "Հայաստան", occupation: "Մոդել" },
    { name: "Ռուբեն", age: 38, city: "Լատվիա", occupation: "Հոգեբան" },
    { name: "Տիգրան", age: 20, city: "Հոլանդիա", occupation: "Մենեջեր" },
    { name: "Շուշան", age: 27, city: "Հայաստան", occupation: "Բիզնես մասնագետ" }
];
function f(a){
    var t = 0;
    for(var b = 0; b < a.length; b++){
        var country = a[b];
        if(country.city == "Հայաստան"){
            var g = a[t];
            a[t] = a[b]
            a[b] = g;
            t++;
        }
    }
    a.length = t;
    console.log(a)
}
f(people)


// function a(x, y){
//     console.log(x ** y)
// }
// a (4, 2);
// a (4, 10);


// var obj1 = {
//     name: "Karen",
//     surname: "Xachatryan",
//     age: "15",
//     city: "Armenia",
//     phone: "555-0101",
//     email: "karen.x@example.com",
//     postalCode: "001"
//   };
  
//   var obj2 = {
//     name: "Ani",
//     surname: "Avagyan",
//     age: "25",
//     city: "Belgia",
//     phone: "555-0102",
//     email: "ani.a@example.com",
//     postalCode: "002"
//   };
  
//   var obj3 = {
//     name: "Vahe",
//     surname: "Hakobyan",
//     age: "40",
//     city: "Chicago",
//     phone: "555-0103",
//     email: "vahe.h@example.com",
//     postalCode: "003"
//   };
  
//   var obj4 = {
//     name: "Arman",
//     surname: "Davtyan",
//     age: "17",
//     city: "Armenia",
//     phone: "555-0104",
//     email: "arman.d@example.com",
//     postalCode: "004"
//   };
  
//   var obj5 = {
//     name: "David",
//     surname: "Vardanyan",
//     age: "28",
//     city: "London",
//     phone: "555-0105",
//     email: "david.v@example.com",
//     postalCode: "005"
//   };
  
//   var obj6 = {
//     name: "Sahak",
//     surname: "Martirosyan",
//     age: "33",
//     city: "Italy",
//     phone: "555-0106",
//     email: "sahak.m@example.com",
//     postalCode: "006"
//   };
  
//   var obj7 = {
//     name: "Hayk",
//     surname: "Avagyan",
//     age: "45",
//     city: "Hungary",
//     phone: "555-0107",
//     email: "hayk.a@example.com",
//     postalCode: "007"
//   };
  
//   var obj8 = {
//     name: "Artur",
//     surname: "Sahakyan",
//     age: "29",
//     city: "Germany",
//     phone: "555-0108",
//     email: "artur.s@example.com",
//     postalCode: "008"
//   };
  
//   var obj9 = {
//     name: "Robert",
//     surname: "Tovmasyan",
//     age: "50",
//     city: "Russia",
//     phone: "555-0109",
//     email: "robert.t@example.com",
//     postalCode: "009"
//   };
  
//   var obj10 = {
//     name: "Laura",
//     surname: "Grigoryan",
//     age: "27",
//     city: "France",
//     phone: "555-0110",
//     email: "laura.g@example.com",
//     postalCode: "010"
//   };

//   var arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];
//  for (var a = 0; a < arr.length; a++) {
//   document.write("<ul>");
//   document.write("<li> Name: ", arr[a]["name"], "</li>");
//   document.write("<li> Surname: ", arr[a]["surname"], "</li>");
//   document.write("<li> Age: ", arr[a]["age"], "</li>");
//   document.write("<li> City: ", arr[a]["city"], "</li>");
//   document.write("<li> Phone: ", arr[a]["phone"], "</li>");
//   document.write("<li> E-mail: ", arr[a]["email"], "</li>");
//   document.write("<li> Postal code: ", arr[a]["postalCode"], "</li>");
//   document.write("</ul>");
// }


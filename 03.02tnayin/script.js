var obj1 = {
  name: "Karen",
  surname: "Xachatryan",
  age: "15",
  city: "Armenia",
  phone: "555-0101",
  email: "karen.x@example.com",
  postalCode: "001"
};

var obj2 = {
  name: "Ani",
  surname: "Avagyan",
  age: "25",
  city: "Belgia",
  phone: "555-0102",
  email: "ani.a@example.com",
  postalCode: "002"
};

var obj3 = {
  name: "Vahe",
  surname: "Hakobyan",
  age: "40",
  city: "Chicago",
  phone: "555-0103",
  email: "vahe.h@example.com",
  postalCode: "003"
};

var obj4 = {
  name: "Arman",
  surname: "Davtyan",
  age: "17",
  city: "Armenia",
  phone: "555-0104",
  email: "arman.d@example.com",
  postalCode: "004"
};

var obj5 = {
  name: "David",
  surname: "Vardanyan",
  age: "28",
  city: "London",
  phone: "555-0105",
  email: "david.v@example.com",
  postalCode: "005"
};

var obj6 = {
  name: "Sahak",
  surname: "Martirosyan",
  age: "33",
  city: "Italy",
  phone: "555-0106",
  email: "sahak.m@example.com",
  postalCode: "006"
};

var obj7 = {
  name: "Hayk",
  surname: "Avagyan",
  age: "45",
  city: "Hungary",
  phone: "555-0107",
  email: "hayk.a@example.com",
  postalCode: "007"
};

var obj8 = {
  name: "Artur",
  surname: "Sahakyan",
  age: "29",
  city: "Germany",
  phone: "555-0108",
  email: "artur.s@example.com",
  postalCode: "008"
};

var obj9 = {
  name: "Robert",
  surname: "Tovmasyan",
  age: "50",
  city: "Russia",
  phone: "555-0109",
  email: "robert.t@example.com",
  postalCode: "009"
};

var obj10 = {
  name: "Laura",
  surname: "Grigoryan",
  age: "27",
  city: "France",
  phone: "555-0110",
  email: "laura.g@example.com",
  postalCode: "010"
};

var obj11 = {
  name: "Narek",
  surname: "Kocharyan",
  age: "32",
  city: "Armenia",
  phone: "555-0111",
  email: "narek.k@example.com",
  postalCode: "011"
};

var obj12 = {
  name: "Lilit",
  surname: "Poghosyan",
  age: "26",
  city: "Los Angeles",
  phone: "555-0112",
  email: "lilit.p@example.com",
  postalCode: "012"
};

var obj13 = {
  name: "Gor",
  surname: "Karapetyan",
  age: "37",
  city: "Beirut",
  phone: "555-0113",
  email: "gor.k@example.com",
  postalCode: "013"
};

var obj14 = {
  name: "Tigran",
  surname: "Hakobyan",
  age: "41",
  city: "Armenia",
  phone: "555-0114",
  email: "tigran.h@example.com",
  postalCode: "014"
};

var obj15 = {
  name: "Sona",
  surname: "Babayan",
  age: "33",
  city: "Armenia",
  phone: "555-0115",
  email: "sona.b@example.com",
  postalCode: "015"
};

var arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15];
for (var a = 0; a < arr.length; a++) {
  if (arr[a]["city"] == "Armenia" && (arr[a]["age"]) < 18) {
    document.write("<ul style='color: red;'>");
  } else if(arr[a]["city"] == "Armenia" && (arr[a]["age"]) > 18){
    document.write("<ul style='color: green;'>");
  }else{
    document.write("<ul style='color: blue;'>");
  }
  
  document.write("<li> Name: ", arr[a]["name"], "</li>");
  document.write("<li> Surname: ", arr[a]["surname"], "</li>");
  document.write("<li> Age: ", arr[a]["age"], "</li>");
  document.write("<li> City: ", arr[a]["city"], "</li>");
  document.write("<li> Phone: ", arr[a]["phone"], "</li>");
  document.write("<li> E-mail: ", arr[a]["email"], "</li>");
  document.write("<li> Postal code: ", arr[a]["postalCode"], "</li>");
  document.write("</ul>");
}
document.write("<ul>");

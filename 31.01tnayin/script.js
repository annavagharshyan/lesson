var obj1 = {
  name: "Karen",
  surname: "Xachatryan",
  age: "30",
  city: "Yerevan",
  job: "Engineer",
  language: "English"
};

var obj2 = {
  name: "Ani",
  surname: "Avagyan",
  age: "25",
  city: "Sevan",
  job: "Designer",
  language: "Spanish"
};

var obj3 = {
  name: "Vahe",
  surname: "Hakobyan",
  age: "40",
  city: "Chicago",
  job: "Doctor",
  language: "English"
};

var obj4 = {
  name: "Arman",
  surname: "Davtyan",
  age: "35",
  city: "Armenia",
  job: "Teacher",
  language: "Armenian"
};

var obj5 = {
  name: "David",
  surname: "Vardanyan",
  age: "28",
  city: "London",
  job: "Programmer",
  language: "English"
};

var obj6 = {
  name: "Sahak",
  surname: "Martirosyan",
  age: "33",
  city: "Italy",
  job: "Doctor",
  language: "English"
};

var obj7 = {
  name: "Hayk",
  surname: "Avagyan",
  age: "45",
  city: "Chicago",
  job: "Teacher",
  language: "Armenian, English"
};

var obj8 = {
  name: "Artur",
  surname: "Sahakyan",
  age: "29",
  city: "Germany",
  job: "Artist",
  language: "German"
};

var obj9 = {
  name: "Robert",
  surname: "Tovmasyan",
  age: "50",
  city: "Russia",
  job: "Mechanic",
  language: "Russian"
};

var obj10 = {
  name: "Laura",
  surname: "Grigoryan",
  age: "27",
  city: "France",
  job: "Doctor",
  language: "French"
};

var arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];
for (var a = 0; a < arr.length; a++) {
  document.write("<ul>");
  document.write("<li> name: ", arr[a]["name"], "</li>");
  document.write("<li> surname: ", arr[a]["surname"], "</li>");
  document.write("<li> age: ", arr[a]["age"], "</li>");
  document.write("<li> city: ", arr[a]["city"], "</li>");
  document.write("<li> job: ", arr[a]["job"], "</li>");
  document.write("<li> language: ", arr[a]["language"], "</li>");
  document.write("</ul>");
}
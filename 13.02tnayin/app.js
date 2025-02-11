// var inp = document.getElementById("s")

// function a() {
//     var val = inp.value
//     console.log(val)
// }


// var elems = document.querySelectorAll(".a")

// function hastatun() {
//     var obj = {}

//     event.preventDefault()
//     for (var inp of elems) {
//         obj[inp.name]=inp.value;
//         inp.value = ""
//     }
//     console.log(obj)
// }

function area() {
    var person = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    createTemplate(person);
}
function createTemplate(person) {
    
    var template = `
        <h4>Ձեր տվյալները</h4>
        <p><strong>First Name:</strong> ${person.firstName}</p>
        <p><strong>Last Name:</strong> ${person.lastName}</p>
        <p><strong>Age:</strong> ${person.age}</p>
        <p><strong>email:</strong> ${person.email}</p>
        <p><strong>phone:</strong> ${person.phone}</p>
    `;
    document.getElementById('output').innerHTML = template;
}
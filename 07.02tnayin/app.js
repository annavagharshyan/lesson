var data = [
    {
        image: "https://i.pinimg.com/736x/70/c8/f2/70c8f25be20477001af41cfbaf51345d.jpg",
        header: "Welcome to the website",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
      
        image: "https://i.pinimg.com/736x/77/a5/db/77a5db66982750dd9bfbcc92c17619aa.jpg",
        header: "Welcome to the website",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
        image: "https://i.pinimg.com/736x/fd/f4/55/fdf455170894effc6f27b67230345add.jpg",
        header: "Welcome to the website",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
        image: "https://i.pinimg.com/736x/d5/59/74/d55974b2cb6a45d54b711fc53395fe0a.jpg",
        header: "Welcome to the website",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
        image: "https://i.pinimg.com/736x/fb/dd/67/fbdd674f0fe76535a25cc487f280f5cc.jpg",
        header: "Welcome to the website",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    },
    {
        image: "https://i.pinimg.com/736x/7a/8f/87/7a8f874e87fadd8647c4e3e7bd124317.jpg",
        header: "Welcome to the website",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto placeat perspiciatis."
    }
]
function creator(x){
    var elem = document.querySelector(".main")
    elem.innerHTML += `
        <div class="item">
            <img src="${x.image}">
            <h1>${x.header}</h1>
            <p>${x.desc}</p>
        </div>`
}
// creator(obj)
for(var obj of data){
    creator(obj)
};

var cards = [
   {
    icon: "fa-solid fa-leaf",
    header: "AWESOME ICONS",
    desc: `Tempora praesentium modi possimus, aliquam earum corporis iusto 
    sapiente consequuntur molestiae a deleniti et odit blanditiis iure 
    nisi perspiciatis. Odio libero ullam perspiciatis magnam nesciunt officiis 
    tempora repellendus unde quo Iste, quasi. Facilis atque error distinctio 
    nostrum sequi eveniet Voluptates, animi. Quam.`,
    handle: "READ MORE"
   },
   {
    icon: "fa-solid fa-mobile-screen",
    header: "AWESOME ICONS",
    desc: `Tempora praesentium modi possimus, aliquam earum corporis iusto 
    sapiente consequuntur molestiae a deleniti et odit blanditiis iure 
    nisi perspiciatis. Odio libero ullam perspiciatis magnam nesciunt officiis 
    tempora repellendus unde quo Iste, quasi. Facilis atque error distinctio 
    nostrum sequi eveniet Voluptates, animi. Quam.`,
    handle: "READ MORE"
   },
   {
    icon: "fa-solid fa-car-battery",
    header: "AWESOME ICONS",
    desc: `Tempora praesentium modi possimus, aliquam earum corporis iusto 
    sapiente consequuntur molestiae a deleniti et odit blanditiis iure 
    nisi perspiciatis. Odio libero ullam perspiciatis magnam nesciunt officiis 
    tempora repellendus unde quo Iste, quasi. Facilis atque error distinctio 
    nostrum sequi eveniet Voluptates, animi. Quam.`,
    handle: "READ MORE"
   }
]

function container(y){
    var cardElement = document.querySelector(".main")
    cardElement.innerHTML += `
        <div class="itemArea">
            <div class ="contentArea">
                <i class="${y.icon}"></i>
                <h1>${y.header}</h1>
            </div>
            <p>${y.desc}</p>
            <button>${y.handle}</button>
        </div>`
}
for(var obj of cards){
    container(obj)
}

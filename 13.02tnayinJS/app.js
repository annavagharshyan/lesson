var cards = [
    {
    image: "https://i.pinimg.com/736x/2d/ac/b5/2dacb56bbe9a60c6676dc8fcf272f39b.jpg",
    icon: "fa-solid fa-globe",
    header: "Web Design",
    desc: `Lorem ipsum dolor sit amet
        conse ctetur adipisicing elit.
        Qui quaerat tugit quas
        veniam perferendis
        repudiandae sequl, dolore
        quisquam illum.`,
    handle: "Read More",
    color: "#e50322",
    popupInfo: `Web design is the process of designing a website. 
                It encompasses everything from the layout and typography 
                to the colours and graphics. A website is more than just 
                a pretty face, however. It needs to be easy to use and 
                navigate, with content that is relevant to your target 
                audience. So, what do you need to know about web design.`
    },
    {
    image: "https://i.pinimg.com/736x/c6/19/3a/c6193a2411b48c3203b420f3fd5a7ab6.jpg",
    icon: "fa-solid fa-rocket",
    header: "Web Development",
    desc: `Lorem ipsum dolor sit amet
        conse ctetur adipisicing elit.
        Qui quaerat tugit quas
        veniam perferendis
        repudiandae sequl, dolore
        quisquam illum.`,
    handle: "Read More",
    color: "#029d98",
    popupInfo: `Web development has become an essential skill in today’s digital age. 
                Whether you’re looking to build your own website, start a new career, 
                or simply understand how the web works, learning web development can 
                open up a world of opportunities. This guide aims to introduce you to 
                the basics of web development and help you take your first steps in this 
                exciting field.`
    },
    {
    image: "https://i.pinimg.com/736x/dd/19/43/dd19433f6f947005d72aa58400bae42f.jpg",
    icon: "fa-solid fa-mobile-button",
    header: "Responsive Design",
    desc: `Lorem ipsum dolor sit amet
        conse ctetur adipisicing elit.
        Qui quaerat tugit quas
        veniam perferendis
        repudiandae sequl, dolore
        quisquam illum.`,
    handle: "Read More",
    color: "#020149",
    popupInfo: `A Responsive website development ensures that your site provides 
                an optimal viewing experience, whether users are accessing it 
                on a desktop, tablet, or smartphone. This ultimate guide will 
                walk you through everything you need to know about responsive 
                design, from its importance to best practices and tools to get started.`
    },
    {
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*zE2ybldrMWfbTE3EddEF-w.jpeg",
    icon: "fa-solid fa-briefcase",
    header: "Brand Building",
    desc: `Lorem ipsum dolor sit amet
        conse ctetur adipisicing elit.
        Qui quaerat tugit quas
        veniam perferendis
        repudiandae sequl, dolore
        quisquam illum.`,
    handle: "Read More",
    color: "#ec520a",
    popupInfo: `Brand building is the process of creating and establishing a brand’s 
                identity, reputation and image in the market. It involves creating 
                a unique and consistent image of the brand through marketing, 
                advertising and other promotional activities, and establishing a 
                strong emotional connection with the target audience. The goal of 
                brand building is to increase brand recognition, create customer 
                loyalty, and drive sales and profits.`
    }
]

function container(y, index) {
    var cardElement = document.querySelector(".main");
    cardElement.innerHTML += `
        <div class="item">
            <i class="${y.icon}" style="color: ${y.color};"></i>
            <h1>${y.header}</h1>
            <p>${y.desc}</p>
            <button style="color: ${y.color};" onclick="openPopup(${index})">${y.handle}</button>
        </div>`;
}

for (var i = 0; i < cards.length; i++) {
    container(cards[i], i);
}

function openPopup(index) {
    document.getElementById("popup-title").textContent = cards[index].header;
    document.getElementById("popup-desc").textContent = cards[index].popupInfo;
    document.getElementById("popup-image").src = cards[index].image;
    document.querySelector(".popup-bg").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.querySelector(".popup-bg").style.display = "none";
    document.getElementById("popup").style.display = "none";
}






 
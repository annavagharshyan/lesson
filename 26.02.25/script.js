document.getElementById("block").addEventListener("scroll", function (tuk) {
    var t = Math.round(tuk.target.scrollTop);
    if (Math.floor(t / 50) % 2 == 0) {
        tuk.target.style = `
            background: red;
            color: white;
            width: 500px;
            height: 400px;
            border: 1px solid;
            overflow: scroll;
        `;
    } else {
        tuk.target.style = `
            background: blue;
            color: white;
            width: 500px;
            height: 400px;
            border: 1px solid;
            overflow: scroll;
        `;
    }
});




var elm = document.getElementById("block1");
var scrollUp = document.getElementById("scrollUp");
var scrollDown = document.getElementById("scrollDown");

elm.addEventListener("scroll", function (tuk1) {
    var tk = tuk1.target.scrollTop;
});
scrollUp.addEventListener("click", function () {
    elm.scrollTop -= 20;
});
scrollDown.addEventListener("click", function () {
    elm.scrollTop += 20;
});





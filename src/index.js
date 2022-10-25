// import cipher from './cipher.js';

// console.log(cipher);

document.getElementById("encode-section").style.display = "none";
document.getElementById("decode-section").style.display = "none";

const botonCifrar = document.getElementById("cbutton");
const botonDescifrar = document.getElementById("dbutton");

botonCifrar.addEventListener("click", function() {
    document.getElementById("main-section").style.display = "none";
    document.getElementById("encode-section").style.display = "flex";
    document.getElementById("decode-section").style.display = "none";
})

botonDescifrar.addEventListener("click", function() {
    document.getElementById("main-section").style.display = "none";
    document.getElementById("decode-section").style.display = "flex";
    document.getElementById("encode-section").style.display = "none";
    // window.open("./decode.html")
})



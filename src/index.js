// import cipher from './cipher.js';

// console.log(cipher);

const botonCifrar = document.getElementById("cbutton");
const botonDescifrar = document.getElementById("dbutton");

botonCifrar.addEventListener("click", function() {
    window.open("./encode.html")
})

botonDescifrar.addEventListener("click", function() {
    window.open("./decode.html")
})

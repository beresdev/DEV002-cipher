const botonEnviar = document.getElementById("enviar");

botonEnviar.addEventListener("click", function() {
    let input = document.getElementById("key");
    let valor = input.value;

    alert("El valor es: " + valor);
});




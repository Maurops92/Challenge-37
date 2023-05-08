var numAzar;

function generarNumero() {
    alert('Se a generado un numero aleatorio entre 1 a 100')
    numAzar = Math.floor(Math.random() * 100) + 1;
}

function obtenerValor() {
    const numAdivinar = document.getElementById("numAdivinar").value;

    if (numAdivinar == numAzar) {
        alert("¡Felicitaciones! Adivinaste el número.");
        location.reload();
    } else if (numAdivinar > numAzar) {
        alert("El número que ingresaste es mayor que el número generado.");
    } else {
        alert("El número que ingresaste es menor que el número generado.");
    }

}



document.getElementById("formularioTurno").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("mensaje").textContent = "¡Solicitud enviada correctamente!";

    this.reset();

});

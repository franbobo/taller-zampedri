let boton = document.createElement("button");
boton.innerText = "Modo oscuro";
boton.className = "claro-oscuro";
document.body.appendChild(boton);
boton.onclick = function() {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        boton.innerText = "Modo oscuro";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        boton.innerText = "Modo claro";
    }
};
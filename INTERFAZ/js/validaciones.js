function validateForm() {
    let us = document.getElementById("userName").value;
    let pass = document.getElementById("pass").value;

    if (us == "" || pass == "") {
        warningMessage.style.display = "block";  // Mostrar el mensaje de advertencia
        warningMessage.innerHTML = "<p>Usuario o contraseña vacíos.</p>";  // Mensaje de advertencia
        return false;
    }

    else if (us == "Hola" && pass == "Si") {
        return true;
    }

    else{
        warningMessage.style.display = "block";  // Mostrar el mensaje de advertencia
        warningMessage.innerHTML = "<p>Datos incorrectos.</p>";  // Mensaje de advertencia
        return false;
    }
}
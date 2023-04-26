let edad = prompt ("Ingresa tu edad")

if (edad >= 18){
    alert ("Sos mayor, podes ingresar");
    let nombreUsuario = prompt ("Ingresa tu nombre de Usuario")
    let pass = prompt ("Ingresa tu Contraseña")
    if (nombreUsuario == "athena" && pass == "basurita") {
        alert ("Ingresaste al sistema")
    } else {
        alert ("Datos incorrectos")
    }
} else {
    alert ("Sos menor de edad")
}

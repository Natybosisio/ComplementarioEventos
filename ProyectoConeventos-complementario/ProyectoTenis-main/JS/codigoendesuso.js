//ESTA FUNCION ES PARA verificar que el usuario este poniendo un dia correcto
function reservaUsuario() {
    dia = prompt("Elija el dia que desea alquilar:  \n - Lunes\n -Martes\n -Miercoles\n -Jueves\n-Viernes\n -Sabado").toLowerCase();
    
    let diaElegido = semanaHabil.includes(dia) 
        
    if(diaElegido){
         horarios();
    }
    else if (dia == "domingo") {
        alert("Nos encontramos cerrados");
        reservaUsuario();
    }
    else {
        alert("Ingrese una opcion correcta");
        reservaUsuario();
    }


}



//con esta funcion confirmo que la hora sea correcta
function horarios() {

    hora = prompt("Ingrese el horario que desea, entre las 8Am y las 22hs");
    if (hora >= 8 && hora < 22) {
        alert("La reserva es de 1hs reloj")
        compararReserva()
        
    }
    else if (hora < 8 || hora > 22) {
        alert("Nos encontramos cerrados");
        reservaUsuario()
    }
    else {
        alert("Ingrese un horario valido");
        reservaUsuario()
    }
}


// alert("Usted puede reservar para la semana del 13 al 18 de junio de 2022");
/*Quiesiera una opción para que se actualice la fecha semana a semana, y 
en el futuro la idea es que sea con un calendario y hagan click sobre el dia */

function cargarDias() {
    diasHabilitados.innerHTML = ""
    for (const dia of semanaHabil) {
        const option = document.createElement("option")
              option.innerText = dia
              option.id = dia + "dia"
              diasHabilitados.append(option) 

    diasHabilitados.addEventListener("click",()=>{return dia})

    }
}
cargarDias()

function cargarHorario() {
    horasHabilitadas.innerHTML = ""
    for (const hora of horariosDisponibles) {
        const option = document.createElement("option")
              option.innerText = hora
              option.id = hora + "horas"
              horasHabilitadas.append(option)

    horasHabilitadas.addEventListener("click", ()=>{return dia})
    }
} 
cargarHorario()

const eleccionUsuario = document.getElementById("eleccionUsuario")
 eleccionUsuario.addEventListener("click",) //function leerDatos(dia, hora))



//con esta funcion informo al usuario si fue reservada previamente
function compararReserva() {
    let existeReserva = buscarCoincidencia(dia, hora)

    if (existeReserva) {
        alert("Disculpa ese dia y horario ya esta reservado, vuelve a intentarlo")
        reservaUsuario()
    } else {
        cargarUsuario()

    }
}

//Con esta funcion verificaremos si el dia y la hora dados por el usuario ya que sencuentran reservados.
function buscarCoincidencia(dia, hora) {
    let existeCita = false

    for (const citaAux of reservas) {
        citaAux.informacion()

        existeCita = citaAux.verificarExistencia(dia, hora)

        if (existeCita) {
            
            break

        }

    }
    return existeCita
}
//con esta funcion el usuario confirma la reserva y es cargada en mi array de reservas
function cargarUsuario(){
    nombre = prompt("¿como te llamas?")
    dni = prompt("Ingrese su DNI/CEDULA")

    citaTemporal = new Reserva(dia, hora, nombre, dni)
    reservas.push(citaTemporal)
    imprimirCitasAgendadas()
    cajaReservas()
    confirmar()
    return
}


//Funcion para recorrer el arreglo de reservas
function imprimirCitasAgendadas() {
    for (const citaAux of reservas) {
        citaAux.informacion()
    }
}
// PARA INCLUIR EL PRECIO
function cajaReservas() {
    for (const caja of reservas) {
        let ingresar = caja.ingresarDinero()
        alert("el total a pagar es: $" + ingresar)
        break
    }

}


function confirmar() {
    let confirmacion = prompt("desea confirmar? \n - Si\n -No").toLowerCase();
    switch (confirmacion) {
        case "si":
            alert("registramos su reserva, Gracias por elegirnos");
            break;

        case "no":
            alert("Su reserva no fue registrada");
            break;

        default:
            alert("La opcion no es correcta");
            confirmar();
            break;
    }

}



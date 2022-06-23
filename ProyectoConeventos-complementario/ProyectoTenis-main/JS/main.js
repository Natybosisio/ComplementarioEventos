class Reserva {
    constructor(dia, hora, nombre, dni) {
        this.dia = dia;
        this.hora = hora;
        this.nombre = nombre;
        this.dni = dni;
        this.precio = 1200;
   

    }
    informacion() {
        console.table("dia [" + this.dia + "], hora[" + this.hora + "], nombre[" + this.nombre + "] dni[" + this.dni + "]" + "precio[" + this.precio + "]");
    }

    reservaDni() {
       return(this.dni)
    }

    verificarExistencia(dia, hora) {
        return (this.dia == dia && this.hora == hora)
    }
    ingresarDinero() {
        return (this.precio * 1)
    }


  }
 let dniR
 let dia 
 let hora 
 let nombre 
 let dni

//ARRAYS
const reservas = []

//ESTO SIMULA LAS HORAS QUE YA ESTAN RESERVADAS PARA LOS PROFESORES, POR LO CUAL NO ESTAN DISPONIBLES
function agregarReservasOcupadas() {
    reservas.push(new Reserva("lunes", 08, "profe martin", "33.333.333",))
    reservas.push(new Reserva("lunes", 09, "profe camila", "22.222.222"))
    reservas.push(new Reserva("martes", 08, "profe martin", "33.333.333"))
    reservas.push(new Reserva("martes", 09, "profe camila", "22.222.222"))
}
agregarReservasOcupadas()

const semanaHabil = ["lunes","martes","miercoles","jueves","viernes","sabado"]


const horariosDisponibles = ["08","09","10","11","12","13","14","15","16","17","18","19","20","21"]


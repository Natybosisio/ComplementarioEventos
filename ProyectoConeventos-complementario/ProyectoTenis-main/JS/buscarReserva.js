
function verificarReservasUsuario() {
   

    let inputDni = document.getElementById("inputDni").value;
   

    let dniUsuario = inputDni
    alert("el dni que escribiste es " + dniUsuario)
    let validado = validadDni(dniUsuario)
    if(validado == false) {
      alert("DEFINITIVAMENTE no es valido")
      return
    }


    for (let dniR of reservas) {
      if (dniR.reservaDni() == dniUsuario) {
         let resultadosPorId = document.getElementById("resultadosPorId");
         
         resultadosPorId.innerHTML =
         "<tr>"+
            "<th scope=\"row\">"+dniR.reservaDni()+"</th>"+
            "<td>"+dniR.dia+"</td>"+
            "<td>"+dniR.hora+"</td>"+
            "<td>"+dniR.nombre+"</td>"+
         "</tr>"
         
         break;
         
         } else {
            alert("no tiene reservas agendadas")
      }
   }

 }



function validadDni(dni){
    let esDniValido = true
   if( dni.length< 7 || dni.length>10){
        alert("la longitud no es correcta")
        esDniValido = false
     }
     return esDniValido
}
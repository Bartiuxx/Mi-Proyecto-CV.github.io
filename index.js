
// No he podido enlazar ningún evento dentro del documento todavía!!!

document.getElementById('boton_dp').addEventListener('click', function() {
    console.log("datos_personales")
    document.getElementById('Datos Personales').innerHTML
})


document.getElementById('datos_personales').addEventListener('click', function(){
    document.style.display='block'

} )

document.getElementById('boton_Formacion').addEventListener('click', function() {
    document.getElementById('demo').style.display = "none";
})
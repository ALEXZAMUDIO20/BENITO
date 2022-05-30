
var guarusuario,guarnombre,guarapellido,guaremail,guarcelular,guardireccion,guarcontraseña;

function obtenerdatos(){
    guarusuario = document.getElementById("usuario").value;
    guarnombre = document.getElementById("nombre").value;
    guarapellido = document.getElementById("apellido").value;
    guaremail = document.getElementById("email").value;
    guarcelular = document.getElementById("celular").value;
    guardireccion = document.getElementById("direccion").value;
    guarcontraseña = document.getElementById("contraseña").value;
    var r = [guarusuario,guarnombre,guarapellido,guaremail,guarcelular,guardireccion,guarcontraseña];
    return r;
}
var input = document.getElementsByTagName("INPUT");
    for (i=0; i<input.length; i++) {
    input[i].addEventListener("change",  function(){
     resultados = obtenerdatos();
     console.log(resultados);
     localStorage.setItem("usuario", guarusuario);
     localStorage.setItem("nombre", guarnombre);
     localStorage.setItem("apellido", guarapellido);
     localStorage.setItem("email", guaremail);
     localStorage.setItem("celular", guarcelular);
     localStorage.setItem("direccion", guardireccion);
     localStorage.setItem("contraseña", guarcontraseña);
    });
   };
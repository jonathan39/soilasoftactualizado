$(document).ready(ini);

function ini(){
    $("#btnregistrar").click(enviarDatos);
    $("#singin").click(validar);
}
function enviarDatos(){
    var usuario = $("#usuario").val();
    var pass = $("#pass").val();
    
    $.ajax({
        url:"insertar.php",
        success:function(result){
            if(result =="true"){
                $("#resultado").html("Usuario registrado correctamente");   
            }else{
                $("#resultado").html("No se Regitro correctamente");
            }
        },
        data:{
            usuario:usuario,
            pass:pass
        },
        type:"GET"
    });
}
function validar(){
    
    var usuario = $("#usuario").val();
    var pass = $("#pass").val();
    
    $.ajax({
        url:"validar.php",
        success:function(result){
            if(result =="true"){
               document.location.href="admin.php";    
            }else{
                $("#resultado").html("<div class='alert alert-danger' role='alert'><b>acceso denegado, </b>No se pudo comprobar Usuario, Datos Invalidos</div>");
            }
        },
        data:{
            usuario:usuario,
            pass:pass
        },
        type:"POST"
    });

}
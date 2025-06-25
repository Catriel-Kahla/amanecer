let userCheck = {
    "user": "Leti",
    "pass": "1234"
}

function sessionIn () {
    if ((document.getElementById("idUser").value == userCheck.user)&&(document.getElementById("idPass").value == userCheck.pass)){
        console.log("Entró");
        window.location.href = "view/inicio.html";
    }
}

console.log("JS...")
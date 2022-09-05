const usuario = {}
const arrayUsuarios = []


let decision = parseInt(prompt("Quiere añadir un usuario? \n 1-Si 2-No"))
while (decision!=1 && decision!=2) {
    decision = parseInt(prompt("Error. Ingrese un numero existente. \n 1-Si 2-No"))
}
while (decision==1) {
  
    usuario.nombre = prompt("Ingrese su nombre")
    usuario.apellido = prompt("Ingrese su apellido")
    usuario.edad = parseInt(prompt("Ingrese su edad"))
    while (typeof(usuario.edad)!=='number' || usuario.edad<=0 ) {
        usuario.edad = parseInt(prompt("Ingrese un numero mayor a 0 para su edad"))
    }
    usuario.dni = parseInt(prompt("Ingrese su dni"))
    while (typeof(usuario.dni)!=='number' || usuario.dni<10000000 || usuario.dni>99999999) {
        usuario.dni = parseInt(prompt("Ingrese un numero con 8 digitos para su dni"))
    }

    
    arrayUsuarios.push(usuario)

    decision = parseInt(prompt("Quiere seguir añadiendo usuarios? \n 1-Si 2-No"))
    while (decision!=1 && decision!=2) {
        decision = parseInt(prompt("Error. Ingrese un numero existente. \n 1-Si 2-No"))
    }
}

alert ("Gracias por confiar en nosotros!")


let eliminarUsuario = parseInt(prompt("Desea eliminar un usuario? \n 1-Si 2-No"))
while (eliminarUsuario!=1 && eliminarUsuario!=2) {
    eliminarUsuario = parseInt(prompt("Error. Ingrese un numero existente. \n 1-Si 2-No"))
}
while (eliminarUsuario===1) {
    const nombreAEliminar =prompt("Ingrese el nombre del usuario")
    const buscarUsuarioAEliminar = arrayUsuarios.find((el) => el.nombre=== nombreAEliminar)
    
    const indiceAEliminar=arrayUsuarios.indexOf(buscarUsuarioAEliminar)
    arrayUsuarios.splice(indiceAEliminar,1)
    
    eliminarUsuario = parseInt(prompt("Desea eliminar otro usuario? \n 1-Si 2-No"))
    while (eliminarUsuario!=1 && eliminarUsuario!=2) {
        eliminarUsuario = parseInt(prompt("Error. Ingrese un numero existente. \n 1-Si 2-No"))
    }
}
   
console.log(arrayUsuarios)

    

   








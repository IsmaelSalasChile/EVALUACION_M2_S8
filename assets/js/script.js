function Cliente(nombre, identificador, clave, saldo) {
    this.nombre = nombre;
    this.identificador = identificador;
    this.clave = clave;
    this.saldo = saldo;
}

var clienteUno = new Cliente ("Patricia Torres", "111", "123", 10000500)
var clienteDos = new Cliente ("John Doe", "222", "456", 90000)
var clienteTres = new Cliente ("Mary Sue", "333", "789", 8000)

function bienvenida() {
    alert("Bienvenido a Banca en Línea")
    let id = prompt("Por favor, ingrese su identificador")
    let pw = prompt("Ahora, ingrese su clave")
    if (id == clienteUno.identificador && pw == clienteUno.clave) {
        alert("Bienvenida, " + clienteUno.nombre + ".")
        menuUno()
    }
    if (id == clienteDos.identificador && pw == clienteDos.clave) {
        alert("Bienvenido, " + clienteDos.nombre + ".")
        menuDos()
    }
    if (id == clienteTres.identificador && pw == clienteTres.clave) {
        alert("Bienvenida, " + clienteTres.nombre + ".")
        menuTres()
    }
    else {
        alert("Usuario o clave incorrecta. Intente nuevamente.")
        bienvenida()
    }
}

function menuUno() {
    let end = prompt("Seleccione que desea hacer: \n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar depósito \n4.- Salir");
    if (end == 1) {
        alert("Su saldo es: " + clienteUno.saldo + ".")
        menuUno()
    }
    if (end == 2) {
        let giroUno = parseInt(prompt("Su saldo actual es: " + clienteUno.saldo + ".\nIngrese el monto que desea girar: "));
        if (Number.isInteger(giroUno) && giroUno <= clienteUno.saldo && giroUno > 0) {
            clienteUno.saldo = clienteUno.saldo - giroUno
            alert("Giro realizado. Su nuevo saldo es: " + clienteUno.saldo + ".")
            menuUno()
        }
        if (Number.isInteger(giroUno) && giroUno > clienteUno.saldo) {
            alert("El giro es mayor que el saldo. Acción inválida. Intente nuevamente.")
            menuUno()
        }
        else if (Number.isInteger(giroUno) && giroUno <= 0) {
            alert("No está permitido girar cantidades negativas (-) o cero (0).")
            menuUno()
        }
        else {
            alert("Caracteres no permitidos. Intente nuevamente.")
            menuUno()
        }
    }
    if (end == 3) {
        let depositoUno = parseInt(prompt("Su saldo actual es: " + clienteUno.saldo + ".\nIngrese el monto que desea depositar: "));
        if (Number.isInteger(depositoUno) && depositoUno > 0) {
            clienteUno.saldo = clienteUno.saldo + depositoUno
            alert("Depósito realizado. Su nuevo saldo es: " + clienteUno.saldo + ".")
            menuUno()
        }
        else if (Number.isInteger(depositoUno) && depositoUno <= 0) {
            alert("No está permitido depositar cantidades negativas (-) o cero (0).")
            menuUno()
        }
        else {
            alert("Caracteres no permitidos. Intente nuevamente.")
            menuUno()
        }
    }
    if (end == 4) {
        alert("Gracias por preferir nuestros servicios. Hasta pronto.")
    }
    else {
        alert("Caracteres no permitidos. Intente nuevamente.")
        menuUno()
    }
}

function menuDos() {
    let end = prompt("Seleccione que desea hacer: \n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar depósito \n4.- Salir");
    if (end == 1) {
        alert("Su saldo es: " + clienteDos.saldo + ".")
        menuDos()
    }
    if (end == 2) {
        let giroDos = parseInt(prompt("Su saldo actual es: " + clienteDos.saldo + ".\nIngrese el monto que desea girar: "));
        if (Number.isInteger(giroDos) && giroDos <= clienteDos.saldo && giroDos > 0) {
            clienteDos.saldo = clienteDos.saldo - giroDos
            alert("Giro realizado. Su nuevo saldo es: " + clienteDos.saldo + ".")
            menuDos()
        }
        if (Number.isInteger(giroDos) && giroDos > clienteDos.saldo) {
            alert("El giro es mayor que el saldo. Acción inválida. Intente nuevamente.")
            menuDos()
        }
        else if (Number.isInteger(giroDos) && giroDos <= 0) {
            alert("No está permitido girar cantidades negativas (-) o cero (0).")
            menuDos()
        }
        else {
            alert("Caracteres no permitidos. Intente nuevamente.")
            menuDos()
        }
    }
    if (end == 3) {
        let depositoDos = parseInt(prompt("Su saldo actual es: " + clienteDos.saldo + ".\nIngrese el monto que desea depositar: "));
        if (Number.isInteger(depositoDos) && depositoDos > 0) {
            clienteDos.saldo = clienteDos.saldo + depositoDos
            alert("Depósito realizado. Su nuevo saldo es: " + clienteDos.saldo + ".")
            menuDos()
        }
        else if (Number.isInteger(depositoDos) && depositoDos <= 0) {
            alert("No está permitido depositar cantidades negativas (-) o cero (0).")
            menuDos()
        }
        else {
            alert("Caracteres no permitidos. Intente nuevamente.")
            menuDos()
        }
    }
    if (end == 4) {
        alert("Gracias por preferir nuestros servicios. Hasta pronto.")
    }
    else {
        alert("Caracteres no permitidos. Intente nuevamente.")
        menuDos()
    }
}

function menuTres() {
    let end = prompt("Seleccione que desea hacer: \n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar depósito \n4.- Salir");
    if (end == 1) {
        alert("Su saldo es: " + clienteTres.saldo + ".")
        menuTres()
    }
    if (end == 2) {
        let giroTres = parseInt(prompt("Su saldo actual es: " + clienteTres.saldo + ".\nIngrese el monto que desea girar: "));
        if (Number.isInteger(giroTres) && giroTres <= clienteTres.saldo && giroTres > 0) {
            clienteTres.saldo = clienteTres.saldo - giroTres
            alert("Giro realizado. Su nuevo saldo es: " + clienteTres.saldo + ".")
            menuTres()
        }
        if (Number.isInteger(giroTres) && giroTres > clienteTres.saldo) {
            alert("El giro es mayor que el saldo. Acción inválida. Intente nuevamente.")
            menuTres()
        }
        else if (Number.isInteger(giroTres) && giroTres <= 0) {
            alert("No está permitido girar cantidades negativas (-) o cero (0).")
            menuTres()
        }
        else {
            alert("Caracteres no permitidos. Intente nuevamente.")
            menuTres()
        }
    }
    if (end == 3) {
        let depositoTres = parseInt(prompt("Su saldo actual es: " + clienteTres.saldo + ".\nIngrese el monto que desea depositar: "));
        if (Number.isInteger(depositoTres) && depositoTres > 0) {
            clienteTres.saldo = clienteTres.saldo + depositoTres
            alert("Depósito realizado. Su nuevo saldo es: " + clienteTres.saldo + ".")
            menuTres()
        }
        else if (Number.isInteger(depositoTres) && depositoTres <= 0) {
            alert("No está permitido depositar cantidades negativas (-) o cero (0).")
            menuTres()
        }
        else {
            alert("Caracteres no permitidos. Intente nuevamente.")
            menuTres()
        }
    }
    if (end == 4) {
        alert("Gracias por preferir nuestros servicios. Hasta pronto.")
    }
    else {
        alert("Caracteres no permitidos. Intente nuevamente.")
        menuTres()
    }
}

bienvenida()
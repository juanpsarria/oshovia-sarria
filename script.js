const escondida = 10000;
const fagnano = 20000;
const roca = 30000;
const esmeralda = 40000;
const parqueNacional = 7000;
const canalBeagle = 25000;
const lagunaEsmeralda = 7000;
let result = 0;
let charge = 0;

function multiply (a, b, messageResult){
    result = a * b;
    console.log(messageResult + result);
    return result;
}

function divide (a, b,){
    charge = a / b;
    return charge
}

const username = prompt ("Ingrese su nombre");
const welcome = "Bienvenido, " + username
alert(welcome);

const booking = prompt ("¿Qué desea reservar? Ingrese cabaña o experiencia");
if (booking === "cabaña"){
    const cottage = prompt ("¿Qué cabaña desea reservar? Escondida, Fagnano, Roca o Esmeralda").toLowerCase();
    switch (cottage) {
        case "escondida":
            console.log(username + " eligió la cabaña Escondida.")
            const escondidaBooking = parseInt(prompt("Ingrese el número de días de su estadía. Ej: 1, 5, 10"));
            console.log("La reserva será por " + escondidaBooking + " días.")
            multiply (escondida, escondidaBooking, "El total es $");
            break;
        case "fagnano":
            console.log(username + " eligió la cabaña Fagnano.")
            const fagnanoBooking = parseInt(prompt("Ingrese el número de días de su estadía. Ej: 1, 5, 10"));
            console.log("La reserva será por " + fagnanoBooking + " días.")
            multiply (fagnano, fagnanoBooking, "El total es $");
            break;
        case "roca":
            console.log(username + " eligió la cabaña Roca.")
            const rocaBooking = parseInt(prompt("Ingrese el número de días de su estadía. Ej: 1, 5, 10"));
            console.log("La reserva será por " + rocaBooking + " días.")
            multiply (roca, rocaBooking, "El total es $");
            break;
        case "esmeralda":
            console.log(username + " eligió la cabaña Esmeralda.")
            const esmeraldaBooking = parseInt(prompt("Ingrese el número de días de su estadía. Ej: 1, 5, 10"));
            console.log("La reserva será por " + esmeraldaBooking + " días.")
            multiply (esmeralda, esmeraldaBooking, "El total es $");
            break;
        default:
            alert("No es una opción válida.");
    }
    const payment = parseInt(prompt("Ingrese el número de cuotas."))
    divide (result, payment)
    console.log("Paga en " + payment + " cuotas de $" + charge);
}else if (booking === "experiencia"){
    const experience = prompt("¿Qué experiencia desea contratar? Laguna Esmeralda, Canal Beagle o Parque Nacional").toLowerCase();
    switch (experience) {
        case "laguna esmeralda":
            console.log(username + " eligió el trekking a la Laguna Esmeralda.");
            const participantLaguna = parseInt(prompt("Ingrese el número de personas que participarán en la excursión"));
            console.log("La excursión es para " + participantLaguna + " personas.")
            multiply (lagunaEsmeralda, participantLaguna, "El total es $");
            break;
        case "canal beagle":
            console.log(username + " eligió navegar en el Canal Beagle.");
            const participantCanal = parseInt(prompt("Ingrese el número de personas que participarán en la excursión"));
            console.log("La excursión es para " + participantCanal + " personas.")
            multiply (canalBeagle, participantCanal, "El total es $");
            break;
        case "parque nacional":
            console.log(username + " eligió recorrer el Parque Nacional.");
            const participantParque = parseInt(prompt("Ingrese el número de personas que participarán en la excursión"));
            console.log("La excursión es para " + participantParque + " personas.")
            multiply (parqueNacional, participantParque, "El total es $");
            break;
        default:
            alert("No es una opción válida.");
    }
    const payment = parseInt(prompt("Ingrese el número de cuotas."))
    divide (result, payment)
    console.log("Paga en " + payment + " cuotas de $" + charge);
} else {
    const booking = prompt ("No es una opción válida.");
}


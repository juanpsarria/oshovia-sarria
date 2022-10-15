//INICIO CREACIÓN DE OBJETOS

class Booking {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    reservation(){
        const amount = parseInt(prompt("Ingrese el número de días de su reserva."));
        this.amount = amount;
        this.finalPrice = this.price * amount;
        alert("El costo total es $" + this.finalPrice + ".");
    }
    payment(){
        const quantity = parseInt(prompt("Ingrese el número de cuotas de su pago."));
        this.quantity = quantity
        this.charge = this.finalPrice / quantity;       
        alert("Su pago se ha confirmado en " + quantity + " cuotas de $" + this.charge + ".");
    }
    show(){
        console.log(username + " reservó " + this.name + " por " + this.amount + " días. El costo total es $" + this.finalPrice + ", a pagar en " + this.quantity + " cuotas de $" + this.charge + ".");
    }
}

class Cottage extends Booking {

}

class Experience extends Booking {
    reservation(){
        const amount = parseInt(prompt("Ingrese el número de personas que realizarán la actividad."));
        this.amount = amount;
        this.finalPrice = this.price * amount;
        alert("El costo total es $" + this.finalPrice + ".");
    }
    show(){
        console.log(username + " reservó " + this.name + " para " + this.amount + " personas. El costo total es $" + this.finalPrice + ", a pagar en " + this.quantity + " cuotas de $" + this.charge + ".");
    }
}

const cottageEscondida = new Cottage ("Cabaña Escondida", 10000);
const cottageFagnano = new Cottage ("Cabaña Fagnano", 20000);
const cottageRoca = new Cottage ("Cabaña Roca", 30000);
const cottageEsmeralda = new Cottage ("Cabaña Esmeralda", 40000);

const experienceParqueNacional = new Experience ("Recorrido Parque Nacional", 7000);
const experienceCanalBeagle = new Experience ("Navegación Canal Beagle", 25000);
const experienceLagunaEsmeralda = new Experience ("Trekking Laguna Esmeralda", 7000);

// FIN CREACIÓN DE OBJETOS

//INICIO INTERACCIÓN CON USUARIO

const username = prompt ("Ingrese su nombre");
const welcome = "Bienvenido, " + username
alert(welcome);

const booking = prompt ("¿Qué desea reservar? Ingrese cabaña o experiencia").toLowerCase();
while (booking === "cabaña"){
    const cottage = prompt ("¿Qué cabaña desea reservar? Escondida, Fagnano, Roca o Esmeralda").toLowerCase();
    switch (cottage) {
        case "escondida":
            cottageEscondida.reservation();
            cottageEscondida.payment();
            cottageEscondida.show();
            break;
        case "fagnano":
            cottageFagnano.reservation();
            cottageFagnano.payment();
            cottageFagnano.show();
            break;
        case "roca":
            cottageRoca.reservation();
            cottageRoca.payment();
            cottageRoca.show();
            break;
        case "esmeralda":
            cottageEsmeralda.reservation();
            cottageEsmeralda.payment();
            cottageEsmeralda.show();
            break;
        default:
            alert("No es una opción válida.");
    }
    break;
}
while (booking === "experiencia"){
    const experience = prompt("¿Qué experiencia desea contratar? Laguna Esmeralda, Canal Beagle o Parque Nacional").toLowerCase();
    switch (experience) {
        case "laguna esmeralda":
            experienceLagunaEsmeralda.reservation();
            experienceLagunaEsmeralda.payment();
            experienceLagunaEsmeralda.show();
            break;
        case "canal beagle":
            experienceCanalBeagle.reservation();
            experienceCanalBeagle.payment();
            experienceCanalBeagle.show();
            break;
        case "parque nacional":
            experienceParqueNacional.reservation();
            experienceParqueNacional.payment();
            experienceParqueNacional.show();
            break;
        default:
            alert("No es una opción válida.");
    }
    break;
}

/* class Booking {
    constructor (name, price){
        this.name = name;
        this.price = price;
        this.reservado = false;
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
        roundCharge = Math.round(this.charge * 100) / 100;
        alert("Su pago se ha confirmado en " + quantity + " cuotas de $" + roundCharge + ".");
    }
    show(){
        this.reservado = true;
        console.log(username + " reservó " + this.name + " por " + this.amount + " días. El costo total es $" + this.finalPrice + ", a pagar en " + this.quantity + " cuotas de $" + roundCharge + ".");
    }
    clientData(){
        const guestList = [];
        alert("Vamos a solicitarle sus datos y los de sus acompañantes.");
        let numberOfGuests = parseInt(prompt("¿Para cuántas personas es la reserva?"));
        do {
            const guest = [
                {guestName: prompt("Ingrese nombre y apellido."), 
                guestID: parseInt(prompt("Ingrese DNI de la persona.")),
                guestAge: parseInt(prompt("Ingrese la edad de la persona."))}
            ];
            guestList.push(guest);
            console.log(guestList.length);

            guest.forEach((client) => {
                console.log("Nombre: " + client.guestName);
                console.log("DNI: " + client.guestID);
                console.log("Edad: " + client.guestAge);
            });

            guest.find((client) => {
                if (client.guestAge < 18){
                    console.log("Es menor.");
                    alert("Los huespedes menores de edad deben presentarse con sus padres o con sus tutores legales.");
                }
                });

        }while (guestList.length != numberOfGuests)
        console.log (guestList);
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
        this.reservado = true;
        console.log(username + " reservó " + this.name + " para " + this.amount + " personas. El costo total es $" + this.finalPrice + ", a pagar en " + this.quantity + " cuotas de $" + this.charge + ".");
    }
} */
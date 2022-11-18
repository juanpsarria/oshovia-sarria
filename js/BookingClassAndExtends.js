//DECLARACIÓN DE CLASES, EXTENDS Y MÉTODOS PARA COMUNICAR PRECIOS

class Booking {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    reservation(){
        let container = document.getElementById("container-precios");
        container.innerHTML = "<p>El precio por noche es: <span> $" + this.price + "</span></p>";
    }
    fullPrice(){
        const checkInDate = new Date (inputCheckIn.value).getTime();
        const checkOutDate = new Date (inputCheckOut.value).getTime();
        const diff = checkOutDate - checkInDate;
        const numberOfDays = diff/(1000*60*60*24);
        const finalPrice = numberOfDays * this.price

        let container = document.getElementById("container-precios");
        container.innerHTML = "<p>El precio por noche es: <span> $" + this.price + "</span></p><p>El precio total es: <span>$" + finalPrice + "</span></p>";
    }
}

class Cottage extends Booking {

}

class Experience extends Booking {
    reservation(){
        let container = document.getElementById("container-precios");
        container.innerHTML = "<p>El precio de la actividad es: <span>$" + this.price + "</span></p>";
    }
    fullPrice(){
        let adults = parseInt(inputExpAdults.value);
        let children = parseInt(inputExpChildren.value);
        let numberOfPeople = adults + children;
        let finalPrice = numberOfPeople * this.price;

        let container = document.getElementById("container-precios");
        container.innerHTML = "<p>El precio de la actividad es: <span>$" + this.price + "</span></p><p>El precio total es: <br><span>$" + finalPrice + "</span></p>";
    }
};
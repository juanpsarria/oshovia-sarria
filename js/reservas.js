//FUNCIONES - FUNCTIONS

function getCottageInfo () {

    const cottageBookingLS = localStorage.getItem("cottageBookingInformation");

    if(cottageBookingLS !== null){
        return JSON.parse(cottageBookingLS);
    }else{
        return [];
    }
}

function getExpInfo() {
    const experienceBookingLS = localStorage.getItem("experienceBookingInformation");

    if(experienceBookingLS !== null) {
        return JSON.parse(experienceBookingLS);
    }

    return [];
}

//VARIABLES GLOBALES - GLOBAL VARIABLES

const cottageBtn = document.getElementById("btn-cabania");
const experienceBtn = document.getElementById("btn-experiencia");

const cottageBookingForm = document.getElementById("cottage-booking-form");
const experienceBoookingForm = document.getElementById("experience-booking-form");

const selectCottage = document.getElementById("cottage");
const selectExperience = document.getElementById("experience");
const inputGuestName = document.getElementById("guest-name");
const inputExpGuestName = document.getElementById("exp-guest-name");
const inputGuestEmail = document.getElementById("guest-email");
const inputExpGuestEmail = document.getElementById("exp-guest-email");
const inputGuestTelephone = document.getElementById("guest-telephone");
const inputExpGuestTelephone = document.getElementById("exp-guest-telephone");
const inputAdults = document.getElementById("adults");
const inputExpAdults = document.getElementById("exp-adults");
const inputChildren = document.getElementById("children");
const inputExpChildren = document.getElementById("exp-children");
const inputCheckIn = document.getElementById("check-in");
const inputCheckOut = document.getElementById("check-out");
const inputExpDate = document.getElementById("exp-date");


//EVENTO DEL BOTÓN CABAÑA - COTTAGE BUTTON EVENT

cottageBtn.addEventListener("click", (_Event) => {
    cottageBookingForm.classList.add("activo");
    experienceBoookingForm.classList.remove("activo");

    const cottageBookingInformation = getCottageInfo();

    cottageBookingForm.addEventListener("submit", (Event) => {

        //STOP EVENT
        Event.preventDefault();
        
        //SE OBTIENEN DATOS DEL FORMULARIO - GETTING INPUT DATA
        const cottage = selectCottage.value;
        const guestName = inputGuestName.value;
        const guestEmail = inputGuestEmail.value;
        const guestTelephone = inputGuestTelephone.value;
        const adults = inputAdults.value;
        const children = inputChildren.value;
        const checkIn = inputCheckIn.value;
        const checkOut = inputCheckOut.value;
    
    
        //SE HACE PUSH DE LOS DATOS DE LA RESERVA AL ARRAY - PUSH INPUT DATA INTO AN ARRAY
        cottageBookingInformation.push({
            cabaña: cottage,
            nombre: guestName,
            email: guestEmail,
            telefono: guestTelephone,
            cantidadDeAdultos: adults,
            cantidadDeMenores: children,
            ingreso: checkIn,
            salida: checkOut,
        });

        //SE CARGA EL ARRAY AL LOCALSTORAGE - ARRAY IS UPLOADED TO LOCALSTORAGE
        localStorage.setItem("cottageBookingInformation", JSON.stringify(cottageBookingInformation));


        alert("Su reserva ha sido realizada.")


        //SE LIMPIAN LOS INPUTS
        selectCottage.value = "";
        inputGuestName.value = "";
        inputGuestEmail.value = "";
        inputGuestTelephone.value = "";
        inputAdults.value = "";
        inputChildren.value = "";
        inputCheckIn.value = "";
        inputCheckOut.value = "";

        console.log(cottageBookingInformation);
});

});


//EVENTO DEL BOTÓN EXPERIENCIA - EXPERIENCE BUTTON EVENT

experienceBtn.addEventListener("click", (_Event) => {
    cottageBookingForm.classList.remove("activo");
    experienceBoookingForm.classList.add("activo");

    const experienceBookingInformation = getExpInfo();

    experienceBoookingForm.addEventListener("submit", (Event) => {

        //STOP EVENT
        Event.preventDefault();
        
        //SE OBTIENEN DATOS DEL FORMULARIO - GETTING INPUT DATA
        const experience = selectExperience.value;
        const guestName = inputExpGuestName.value;
        const guestEmail = inputExpGuestEmail.value;
        const guestTelephone = inputExpGuestTelephone.value;
        const adults = inputExpAdults.value;
        const children = inputExpChildren.value;
        const expDate = inputExpDate.value;
    
    
        //SE HACE PUSH DE LOS DATOS DE LA RESERVA AL ARRAY - PUSH INPUT DATA INTO AN ARRAY
        experienceBookingInformation.push({
            experiencia: experience,
            nombre: guestName,
            email: guestEmail,
            telefono: guestTelephone,
            cantidadDeAdultos: adults,
            cantidadDeMenores: children,
            fecha: expDate,
        });

        //SE CARGA EL ARRAY AL LOCALSTORAGE - ARRAY IS UPLOADED TO LOCALSTORAGE
        localStorage.setItem("experienceBookingInformation", JSON.stringify(experienceBookingInformation));
        
        alert("Su reserva ha sido realizada.")

        //SE LIMPIAN LOS INPUTS
        selectExperience.value = "";
        inputExpGuestName.value = "";
        inputExpGuestEmail.value = "";
        inputExpGuestTelephone.value = "";
        inputExpAdults.value = "";
        inputExpChildren.value = "";
        inputExpDate.value = "";

        console.log(experienceBookingInformation);
});

});

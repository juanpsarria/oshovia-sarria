//FUNCIONES - FUNCTIONS

function getCottageInfo () {

    const cottageBookingLS = localStorage.getItem("cottageBookingInformation");

    if(cottageBookingLS !== null){
        return JSON.parse(cottageBookingLS);
    }else{
        return [];
    }
};

function getExpInfo() {
    const experienceBookingLS = localStorage.getItem("experienceBookingInformation");

    if(experienceBookingLS !== null) {
        return JSON.parse(experienceBookingLS);
    }

    return [];
};

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

//SE CONFIGURA FECHA PARA QUE LA RESERVA NO PUEDA SER ANTERIOR AL DÍA PRESENTE 

inputCheckIn.min = new Date().toISOString().split("T")[0];
inputCheckOut.min = new Date().toISOString().split("T")[0];
inputExpDate.min = new Date().toISOString().split("T")[0];


//EVENTO DEL BOTÓN CABAÑA - COTTAGE BUTTON EVENT

cottageBtn.addEventListener("click", (_Event) => {
    //SEGÚN EL BOTÓN EN QUE SE HAGA CLICK, APARECEN LAS OPCIONES DE RESERVA
    cottageBookingForm.classList.add("activo");
    experienceBoookingForm.classList.remove("activo");

    //SELECCIÓN DE CABAÑAS

    selectCottage.addEventListener ("change", (_Event) => {
        switch(selectCottage.value){
            case "Cabaña Escondida":
                cottageEscondida.reservation();

                inputCheckOut.addEventListener("change", (_event) => {
                    cottageEscondida.fullPrice();
                });
            break;

            case "Cabaña Fagnano":
                cottageFagnano.reservation();

                inputCheckOut.addEventListener("change", (_event) => {
                    cottageFagnano.fullPrice();
                });
            break;

            case "Cabaña Roca":
                cottageRoca.reservation();

                inputCheckOut.addEventListener("change", (_event) => {
                    cottageRoca.fullPrice();
                });
            break;

            case "Cabaña Esmeralda":
                cottageEsmeralda.reservation();

                inputCheckOut.addEventListener("change", (_event) => {
                    cottageEsmeralda.fullPrice();
                });
            break;
        }
    });


    const cottageBookingInformation = getCottageInfo();

    //EVENTO PARA ENVIAR INFORMACIÓN DE RESERVA

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
    
        if (cottage == "" || guestName == "" || guestTelephone == "" || guestEmail == "" || checkIn == "" || checkOut == ""){

            //MENSAJE DE FALTA DE DATOS
            Swal.fire('Por favor, complete todos los campos.')

        }else{

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

            //MENSAJE RESERVA COMPLETA
            Swal.fire({
                position: 'center',
                title: 'Su reserva se ha realizado.',
                showConfirmButton: true,
            });
        
            //SE LIMPIA EL COMUNICADOR DE PRECIOS
            let container = document.getElementById("container-precios");
            container.innerHTML = "";

            //SE LIMPIAN LOS INPUTS
            selectCottage.value = "";
            inputGuestName.value = "";
            inputGuestEmail.value = "";
            inputGuestTelephone.value = "";
            inputAdults.value = "";
            inputChildren.value = "";
            inputCheckIn.value = "";
            inputCheckOut.value = "";

            //SE USA PROMESA PARA OBTENER CADA RESERVA COMO UN OBJETO
            const bookingData = new Promise ((resolve, reject) =>{
                setTimeout(() => {
                    return resolve(cottageBookingInformation)
                }, 250)
            })
            .then((newList) =>{
                newList.map( el =>{
                    console.log(el);
                });
            });
        };
    });
});




//EVENTO DEL BOTÓN EXPERIENCIA - EXPERIENCE BUTTON EVENT

experienceBtn.addEventListener("click", (_Event) => {
    //SEGÚN EL BOTÓN EN QUE SE HAGA CLICK, APARECEN LAS OPCIONES DE RESERVA
    cottageBookingForm.classList.remove("activo");
    experienceBoookingForm.classList.add("activo");

    //SELECCIÓN DE CABAÑAS

    selectExperience.addEventListener ("change", (_Event) => {
        switch(selectExperience.value){
            case "Laguna Esmeralda":
                experienceLagunaEsmeralda.reservation();

                inputExpAdults.addEventListener("change", (_event) => {
                    experienceLagunaEsmeralda.fullPrice();
                });
                
                inputExpChildren.addEventListener("change", (_event) => {
                    experienceLagunaEsmeralda.fullPrice();
                });
            break;

            case "Parque Nacional":
                experienceParqueNacional.reservation();

                inputExpAdults.addEventListener("change", (_event) => {
                    experienceParqueNacional.fullPrice();
                });
                
                inputExpChildren.addEventListener("change", (_event) => {
                    experienceParqueNacional.fullPrice();
                });
            break;

            case "Canal Beagle":
                experienceCanalBeagle.reservation();

                inputExpAdults.addEventListener("change", (_event) => {
                    experienceCanalBeagle.fullPrice();
                });
                
                inputExpChildren.addEventListener("change", (_event) => {
                    experienceCanalBeagle.fullPrice();
                });
            break;
        }
    });

    const experienceBookingInformation = getExpInfo();

    //EVENTO PARA ENVIAR INFORMACIÓN DE RESERVA
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
    
        if (experience == "" || guestName == "" || guestTelephone == "" || guestEmail == "" || adults == "" || expDate == "" || adults < 0 || children < 0){

            //MENSAJE DE FALTA DE DATOS
            Swal.fire('Por favor, complete todos los campos.')

        }else{

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
    
            //MENSAJE RESERVA COMPLETA
            Swal.fire({
                position: 'center',
                title: 'Su reserva se ha realizado.',
                showConfirmButton: true,
            });

            //SE LIMPIA EL COMUNICADOR DE PRECIOS
            let container = document.getElementById("container-precios");
            container.innerHTML = "";

            //SE LIMPIAN LOS INPUTS
            selectExperience.value = "";
            inputExpGuestName.value = "";
            inputExpGuestEmail.value = "";
            inputExpGuestTelephone.value = "";
            inputExpAdults.value = "";
            inputExpChildren.value = "";
            inputExpDate.value = "";

            //SE USA PROMESA PARA OBTENER CADA RESERVA COMO UN OBJETO
            const bookingExpData = new Promise ((resolve, reject) =>{
                setTimeout(() => {
                    return resolve(experienceBookingInformation)
                }, 250)
            })
            .then((newList) =>{
                newList.map( el =>{
                    console.log(el);
                });
            });
        };
    });
});
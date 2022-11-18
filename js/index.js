//FORMULARIO DE CONTACTO

//VARIABLES GLOBALES

const contactName = document.getElementById("from_name");
const contactEmail = document.getElementById("email_id");
const contactTelephone = document.getElementById("telephone");
const contactMessage = document.getElementById("message");
const resetButton = document.getElementById("btn-borrar");
const submitButton = document.getElementById("btn-enviar");

// EVENTO SUBMIT



document.getElementById('contact-form').addEventListener('submit', function (event) {

    //STOP EVENT
    event.preventDefault();

    //SE OBTIENEN LOS DATOS DEL FORMULARIO
    const name = contactName.value;
    const email = contactEmail.value;
    const phone = contactTelephone.value;
    const message = contactMessage.value;

    //SE AGREGA IF PARA QUE NO HAYA CAMPOS VACÍOS
    if (name == "" || email == "" || phone == "" || message == "") {

        //MENSAJE DE FALTA DE DATOS
        Swal.fire({
            position: 'center',
            title: 'Debe ingresar todos los datos.',
            showConfirmButton: true,
        });
    } else {

        //CAMBIO EN EL BOTON ENVIAR
        submitButton.value = 'Enviando...';

        //VARIABLES DE EMAILJS
        const serviceID = 'default_service';
        const templateID = 'template_iwsgyno';

        //SE ENVÍA INFORMACIÓN POR EMAILJS
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                submitButton.value = 'Enviar';
                Swal.fire({
                    position: 'center',
                    title: 'Su mensaje ha sido enviado.',
                    showConfirmButton: true,
                });
            },
                (err) => {
                    submitButton.value = 'Enviar';
                    Swal.fire({
                        position: 'center',
                        text: JSON.stringify(err),
                        showConfirmButton: true,
                    });
                });

        //SE VACÍAN LOS INPUTS
        contactName.value = "";
        contactEmail.value = "";
        contactTelephone.value = "";
        contactMessage.value = "";
    };
});

//EVENTO RESET
resetButton.addEventListener("click", (_event) => {

    //STOP EVENT
    _event.preventDefault();

    //MENSAJE DE CONFIRMACIÓN
    Swal.fire({
        title: '¿Desea borrar los datos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: "No"
    }).then((result) => {

        //SE BORRAN LOS DATOS SI CONFIRMA
        if (result.isConfirmed) {
            Swal.fire(
                'Los datos han sido borrados.',
            );
            contactName.value = "";
            contactEmail.value = "";
            contactTelephone.value = "";
            contactMessage.value = "";
        };
    });
});
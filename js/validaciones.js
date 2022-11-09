export function valida(target) {
    const tipoasdDeInput = target.dataset.tipoasd;
    if (validadores[tipoasdDeInput] != null) {
        validadores[tipoasdDeInput](target);
    }

    if (target.validity.valid) {
        console.log("target.parentElement");
        target.parentElement.classList.remove("input-container--invalid");
        target.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        target.parentElement.classList.add("input-container--invalid");
        target.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoasdDeInput, target);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio",
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Al menos 8 caracteres, que incluya minusculas, mayusculas, numeros y caracteres especiales",
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad",
    },
    tel: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es de hasta 10 numeros sin espacios ni caracteres especiales",
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es de entre 10 y 50 caracteres",
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es de entre 10 y 50 caracteres",
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es de entre 10 y 50 caracteres",
    },
};

const validadores = {
    nacimiento: (e) => validarDate(e),
};

function mostrarMensajeDeError(tipoasdDeInput, target) {
    let mensaje = "";
    pepe: for (let i = 0; i < 3; i++) {
        if(i==3){
            break pepe;
        }
        
    }
    tipoDeErrores.forEach(error => {
        if (target.validity[error]) {
            mensaje = mensajesDeError[tipoasdDeInput][error];
        };
    });
    return mensaje;
}

// LO MISMO DE ARRIBA, PERO NO ESCALABLE
// let inputDate = document.getElementById("birth");
// inputDate.addEventListener('blur', (e) => {
//     validarDate(e.target);
// });

function validarDate(e) {
    const fecha = new Date(e.value);
    if (mayorEdad(fecha)) {
        e.setCustomValidity("");
    } else {
        e.setCustomValidity("Debes tener al menos 18 años de edad");
    }
};

function mayorEdad(fecha) {
    const fechaActual = new Date();
    const fecha18 = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getMonth(),
        fecha.getDate()
    );
    return fechaActual >= fecha18;
}
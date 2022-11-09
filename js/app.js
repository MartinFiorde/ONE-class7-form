import { valida } from './validaciones.js';

const inputs = document.querySelectorAll("input");

inputs.forEach(aux => {
    aux.addEventListener("blur", (e) => {
        valida(e.target);
    });
});

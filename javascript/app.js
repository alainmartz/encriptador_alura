// Asignar elementos
const textoEntrada = document.getElementById("input");
const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const botonCopiar = document.getElementById("copiar");
const textoSalida = document.getElementById("output");
const soloLetras = /^[a-z\s]+$/g;  // Regex para permitir solo letras minúsculas y espacios
const mugnieco = document.getElementById("mugnieco");
const infoDer = document.getElementById("info_der");
const errorMessage = document.getElementById("error_message");


let encriptadores =  [
        ["e", "enter"],
        ["o","ober"],
        ["i","imes"],
        ["a","ai"],
        ["u","ufat"]
];

// Encriptar/Desencriptar función común
function procesarTexto(texto, tipo) {
        for (let i = 0; i < encriptadores.length; i++) {
            const [original, encriptado] = encriptadores[i];
            if (tipo === "encriptar") {
                texto = texto.replaceAll(original, encriptado);
            } else if (tipo === "desencriptar") {
                texto = texto.replaceAll(encriptado, original);
            }
        }
        return texto;
    }



// Evento para encriptar
botonEncriptar.addEventListener("click", () => {
        const texto = textoEntrada.value.toLowerCase();
    
        if(texto.match(soloLetras)) {
            errorMessage.classList.add("oculto");
            const textoProcesado = procesarTexto(texto, "encriptar");
            textoSalida.value = textoProcesado;
            textoSalida.classList.remove("oculto");
            mugnieco.style.display = "none";
            infoDer.style.display = "none";
            botonCopiar.classList.remove("oculto");
        } else {
            errorMessage.classList.remove("oculto");
        }
    });

// Evento para desencriptar
botonDesencriptar.addEventListener("click", () => {
        const texto = textoEntrada.value.toLowerCase();
    
        if(texto.match(soloLetras)) {
            errorMessage.classList.add("oculto");
            const textoProcesado = procesarTexto(texto, "desencriptar");
            textoSalida.value = textoProcesado;
            textoSalida.classList.remove("oculto");
            mugnieco.style.display = "none";
            infoDer.style.display = "none";
            botonCopiar.classList.remove("oculto");
        } else {
            errorMessage.classList.remove("oculto");
        }
    });


// Evento para copiar el texto
botonCopiar.addEventListener("click", () => {
        navigator.clipboard.writeText(textoSalida.value).then(() => {
            alert("El mensaje se ha copiado");
        });
    });
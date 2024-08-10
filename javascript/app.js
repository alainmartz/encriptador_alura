const textoEntrada = document.getElementById("input");
const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const botonCopiar = document.getElementById("copiar");
const textoSalida = document.getElementById("output");
const soloLetras = RegExp("^[a-z\S]+$","g");
//"\A[a-z]+\z";//"^[a-z !ñ]+$" // 
const mugnieco = document.getElementById("mugnieco");
const infoDer = document.getElementById("info_der");


let encriptadores =  [
        ["e", "enter"],
        ["o","ober"],
        ["i","imes"],
        ["a","ai"],
        ["u","ufat"]
];


botonEncriptar.addEventListener("click", () => {
        const texto = textoEntrada.value //.toLowerCase()
        function encriptar(cripText) {
                for (let i=0;i < encriptadores.length; i++){
                        if (cripText.includes(encriptadores[i][0])){
                                cripText=cripText.replaceAll(encriptadores[i][0], encriptadores[i][1])
                        };
                };
                return cripText
        }
        if(texto.match(soloLetras)!=null){
                const textoEncriptado = encriptar(texto);
                textoSalida.innerHTML = textoEncriptado;
                mugnieco.style.display = "none";
                infoDer.style.display = "none";
                botonCopiar.style.display = "block";
        } else alert('Solo se permiten letras minúsculas, sin acentos');
        return;
})



botonDesencriptar.addEventListener("click", () => {
        const texto = textoEntrada.value.toLowerCase()
        function desencriptar(cripText) {
                for (let i=0;i < encriptadores.length; i++){
                        if (cripText.includes(encriptadores[i][0])){
                                cripText=cripText.replaceAll(encriptadores[i][1], encriptadores[i][0])
                        };
                };
                return cripText
        }
        if(texto.match(soloLetras)!=null){
                const textoEncriptado = desencriptar(texto);
                textoSalida.innerHTML = textoEncriptado;
                mugnieco.style.display = "none";
                infoDer.style.display = "none";
                botonCopiar.style.display = "block";
        } else alert('Solo se permiten letras minúsculas, sin acentos');
        return;
})


botonCopiar.addEventListener("click", () => {
        let texto = textoSalida;
        texto.select();
        document.execCommand("copy")
        alert ("El mensaje se ha copiado");
})
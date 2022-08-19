//let btn = document.querySelector("#btnEncriptar");
//btn.onclick = Encriptar;
function encriptar(){
  let frase = document.getElementById("textoNoCifrado").value.toLowerCase();
  let fraseCifrada = frase.replace(/e/img, "enter");
  fraseCifrada = fraseCifrada.replace(/o/img, "ober");
  fraseCifrada = fraseCifrada.replace(/i/img, "imes");
  fraseCifrada = fraseCifrada.replace(/a/img, "ai");
  fraseCifrada = fraseCifrada.replace(/u/img, "ufat");
  
  document.getElementById("fraseCifrada").innerHTML = fraseCifrada;
  document.getElementById("btnCopiar").style.display = "show";
  document.getElementById("btnCopiar").style.display = "inherit";
  document.getElementById("textoNoCifrado").value = "";
  

}
function desencriptar(){
  let frase = document.getElementById("textoNoCifrado").value.toLowerCase();
  let fraseCifrada = frase.replace(/enter/img, "e");
  fraseCifrada = fraseCifrada.replace(/ober/img, "o");
  fraseCifrada = fraseCifrada.replace(/imes/img, "i");
  fraseCifrada = fraseCifrada.replace(/ai/img, "a");
  fraseCifrada = fraseCifrada.replace(/ufat/img, "u");
  document.getElementById("fraseCifrada").innerHTML = fraseCifrada;
  document.getElementById("textoNoCifrado").value = "";
  
}
function copiar(){
  navigator.clipboard.writeText(fraseCifrada.value).then(() => {
    alert("Texto Copiado!!!");
});
  // let copy = document.getElementById("fraseCifrada");
  // copy.select();
  // document.execCommand("copy");
}

const inputName1 = prompt("inserisci primo nome");
const inputName2 = prompt("inserisci secondo nome");

const lenghtName1 = inputName1.length;
const lenghtName2 = inputName2.length;

console.log(lenghtName1)

if (lenghtName1>lenghtName2){
    document.getElementById("result").innerText = inputName1 + inputName2

} else if (lenghtName1<lenghtName2) {
    document.getElementById("result").innerText = inputName2 + inputName1

} else {
    document.getElementById("result").innerText = "le parole sono dela stessa lunghezza"
    
}






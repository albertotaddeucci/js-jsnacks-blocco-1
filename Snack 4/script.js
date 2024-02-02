/*

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

*/




const input = Number(prompt("Inserisci un numero"));

let stringNumb = input.toString();

let sum = 0;

for (let i = 0; i < stringNumb.length; i++){
    sum += Number(stringNumb[i]);

}


document.getElementById("result").innerText = sum


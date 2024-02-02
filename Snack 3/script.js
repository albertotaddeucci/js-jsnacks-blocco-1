/*

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array

*/

const array = [];
const array2 = []

for (i=0; i<6; i++){
    
    const input =  Number(prompt("inserisci numero"));

    if (input%2 != 0){
        array.push(input);

        document.getElementById("result").innerText = `Numeri dispari inseriti:${array}`;
    } else {
        array2.push(input);


    }

    document.getElementById("array").innerText = `Totale numeri inseriti ${array},${array2}`



}




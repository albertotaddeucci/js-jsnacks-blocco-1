/*

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Solo se è dispari inseriscilo nell’array.
Stampa a schermo il contenuto dell'array

*/

const array = [];
const array2 = [];
const array3 = [];

for (i=0; i<6; i++){
    
    const input =  Number(prompt("inserisci numero"));

    if (isNaN(input) ){
        array3.push(input);
        
    } else if (input%2 != 0){
        array.push(input);
        
    } else {
        array2.push(input);
        
    }


}

if (array3.length>0){
    document.getElementById("array").innerHTML = `<b>Attenzione</b>: Non hai inserito ${6 - array.length - array2.length} numeri`;
    document.getElementById("result").innerText = `Numeri dispari inseriti: ${array}`;
    
} else {
    document.getElementById("array").innerText = `Tutti i numeri inseriti ${array},${array2}`;        
    document.getElementById("result").innerText = `Numeri dispari inseriti: ${array}`;

}





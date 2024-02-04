/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

const array = [];

let sum = 0;
for (i=0; i<10; i++){
    
    const input =  Number(prompt("inserisci numero"));

    if (!isNaN(input)){
        array.push(input)
    
        sum += input;
        document.getElementById("array").innerText = `Hai inserito i seguenti numeri: ${array}`
        
        document.getElementById("result").innerText = `La somma è pari a ${sum}`

    } else if (array.length<10){

        document.getElementById("result").innerText = `Non hai inserito tutti i numeri !`

    }
    

}





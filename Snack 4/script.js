/*

Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.

*/

const buttonGo = document.getElementById("button");

buttonGo.addEventListener("click",
function(){

    const input = Number(document.getElementById("input").value);

        
    let stringNumb = input.toString();
    
    let sum = 0;
    
    for (let i = 0; i < stringNumb.length; i++){
        sum += Number(stringNumb[i]);
    
    }
    
    if (stringNumb.length != 4){
     document.getElementById("result").innerText = `Devi inserire un numero di 4 cifre!`;

    } else{
        document.getElementById("result").innerText = `Somma delle cifre pari a ${sum}`;
    }
    


})




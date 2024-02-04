/*
Stampa il cubo dei primi N numeri,
(partendo da 1, il numero N indicato dall'utente è compreso)
dove N è un numero indicato dall’utente.


*/

const buttonGo = document.getElementById("button");

buttonGo.addEventListener("click",
function(){
    
    const input = document.getElementById("input").value;
    const array = []
    const array2 = array.reverse()
    
    
    for (i=1; i<=input; i++){
      cube =  Math.pow([i],3)
    
        array.push(cube);
        document.getElementById("result").innerHTML += `${[i]}<sup>3</sup> =  ${array[i-1]}<br> `
    }
               
    
    if (input < 0){
        document.getElementById("result").innerHTML = `Inserisci un numero maggiore di 0 `
    }
        


}


)





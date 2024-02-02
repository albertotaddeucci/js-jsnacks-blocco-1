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
    
    
    for (i=1; i<input; i++){
        for (i=1; i<=input; i++){
          cube =  Math.pow([i],3)
        
            array.push(cube);
        }
       
    };
    
    
    
    
    
    if (input < 0){
        for (i=input; i<0; i++){
            cube =  Math.pow([i],3);
        
            array.push(cube);
        
        }
    }
    
    
    document.getElementById("result").innerText = array


}


)





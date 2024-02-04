const buttonGo = document.getElementById("button");

buttonGo.addEventListener("click",
function(){
    const inputName1 = document.getElementById("input-name1").value;
    const inputName2 = document.getElementById("input-name2").value;
    
    const lenghtName1 = Number(inputName1.length);
    const lenghtName2 = Number(inputName2.length);

    if (lenghtName1>lenghtName2){
        document.getElementById("result").innerText = inputName1 + inputName2
    
    } else if (lenghtName1<lenghtName2) {
        document.getElementById("result").innerText = inputName2 + inputName1
    
    } else {
        document.getElementById("result").innerText = "le parole sono della stessa lunghezza"
        
    }
   
    if (!isNaN(inputName1) || !isNaN(inputName2)){
        document.getElementById("result").innerText = "Devi inserire un nome!"

    }

    
})







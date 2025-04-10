const nameInput = document.getElementById("name-input");
const distanceInput = document.getElementById("distance-input");
const ageInput = document.getElementById("age-input");


const sendButton = document.getElementById("btn-generate");

sendButton.addEventListener("click",function (){
    const name = nameInput.value;
    const distance = distanceInput.value;
    const age = parseInt(ageInput.value);

    console.log("Nome persona:" + name);
    console.log("km da percorrere:" +  distance);
    console.log("fascia d'età" + age);
    

    
})
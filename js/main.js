const nameInput = document.getElementById("name-input");
const distanceInput = document.getElementById("distance-input");
const ageInput = document.getElementById("age-input");
const registredPersonForm = document.getElementById("register-person-form");

registredPersonForm.addEventListener("submit",function (){
    const name = nameInput.value;
    const distance = distanceInput.value;
    const age = parseInt(ageInput.value);

    console.log("Nome e Cognome:" + name);
    console.log("Km da percorrere:" +  distance);
    console.log("Fascia d'età:" + age);
    

    
})
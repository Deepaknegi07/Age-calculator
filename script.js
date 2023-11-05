
//    Input Part

let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');

let inputErrorday = document.querySelector('#input-errorday');
let inputErrormonth = document.querySelector('#input-errormonth');
let inputErroryear = document.querySelector('#input-erroryear');



//  Output Part

let yearOut = document.querySelector("#year-out");
let monthOut = document.querySelector("#month-out");
let dayOut = document.querySelector("#day-out");

let submit = document.querySelector(".submit");




day.addEventListener("input", function(){
    if(+day.value > 31){
        inputErrorday.textContent = "Must be a valid day";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        inputErrorday.textContent = "";

    }
    if(+day.value === 0){
        isValid = false;
        inputErrorday.textContent = "The field is required";
        isValid = false;
        return;
    }
    else{
        inputErrorday.textContent = "";  
    }
});


month.addEventListener("input", function(){
    if(+month.value > 12){
        inputErrormonth.textContent = "Must be a valid month";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        inputErrormonth.textContent = "";

    }
    if(+month.value === 0){
        isValid = false;
        inputErrormonth.textContent = "The field is required";
        isValid = false;
        return;
    }
    else{
        inputErrormonth.textContent = "";
        
    }
});


year.addEventListener("input", function(){
    if(+year.value > 2024){
        inputErroryear.textContent = "Must be a valid year";
        isValid = false;
        return;
    }
    else{
        isValid = true;
        inputErroryear.textContent = "";

    }
    if(+year.value === 0){
        isValid = false;
        inputErroryear.textContent = "The field is required";
        isValid = false;
        return;
    }
    else{
        inputErroryear.textContent = "";
        
    }
});




submit.addEventListener('click', function(){
    if(isValid){
    let birthday = `${day.value}/${month.value}/${year.value}`;
    console.log(birthday);

    let birthdayObj = new Date(birthday);
    let agediff = Date.now() - birthdayObj;
    let ageDate = new Date(agediff);

    let ageYear = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;
    console.log(ageYear);
    console.log(ageMonth);
    console.log(ageDay);

    yearOut.textContent = ageYear ; 
    monthOut.textContent = ageMonth ; 
    dayOut.textContent = ageDay ; 
    }
    else{
        alert('Error');
    };
    

});
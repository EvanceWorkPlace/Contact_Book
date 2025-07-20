const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultE1 = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayE1.ariaValueMax;
    if(birthdayValue === ""){
        alert("Please enter your birthday");
    }else {
        const age = getAge(birthdayValue);
        resultE1.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "years"} old`;
    }
}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    console.log("here is current: " + currentDate);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    console.log("Here is the 1st: " + age + "month :" + month );
    if(month < 0 || (month ===0 && currentDate.getDate()< birthdayDate.getDate())){
        console.log("Here is 2nd :" + age);
        age--;
    }
    
    return age;
    
}
btnE1.addEventListener("click", calculateAge);
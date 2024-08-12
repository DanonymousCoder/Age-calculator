const btnElem = document.getElementById("btn");

const birthdayElem = document.getElementById("birthday");

const result = document.getElementById("result");

btnElem.addEventListener("click", calculateAge);

function calculateAge() {
    const birthdayValue = birthdayElem.value;

    if (birthdayValue === "") {
        alert("Please enter your birth date");
    } else {
        const age = getAge(birthdayValue);
        result.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }

}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate()) ){
        age--;
    }

    return age;
}
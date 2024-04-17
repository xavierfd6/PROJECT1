function checkAge(){
    var age = prompt("Please enter your age")

    if ( age>=25) {
        alert("You are 25 years old and up");
    }else{
        alert("You are under 25 years old.")
    }
}

function checkNumber(){
    var number = prompt("input a number")

    if (number < 100){
        alert("You entered a number less than 100");
    }else {
        alert("you entered a number greater or equal to 100")
    }
}
function printNumbers() {
    var numbers = '';
    for (var i = 0; i <= 30; i++){
        numbers += i + "<br>";
    }
    document.getElementById('printNumbersBox').innerHTML = numbers;
}
function printEvenNumbers(){
    var numbers = '';
    for (var i = 0; i <= 40; i +=2){
        numbers += i + "<br>";
    }
    document.getElementById('printEvenNumbersBox').innerHTML = numbers;
}
function printMultiNumbers(){
    var numbers = '';
    for (var i = 40; i >= 10; i --){
        if(i % 3 === 0){
            numbers += i + "<br>";
        }
    }
    document.getElementById('printMultiNumbersBox').innerHTML = numbers;
}
function ResetPrints1(){
    document.getElementById('printNumbersBox').innerHTML = '';
}
function ResetPrints2(){
    document.getElementById('printEvenNumbersBox').innerHTML = '';
}
function ResetPrints3(){
    document.getElementById('printMultiNumbersBox').innerHTML = '';
}
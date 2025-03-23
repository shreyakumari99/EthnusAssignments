function multiply(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = num1 * num2;
    // alert("The result is "+result);
    document.querySelector(".result").innerHTML = "The Result Is:<br>"+result;
}
function divide(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = num1 / num2;
    // alert("The result is "+result);
    document.querySelector(".result").innerHTML = "The Result Is:<br>"+result;
}

function Subtraction(){
     var n1= parseInt(document.getElementById(num1).value);
     var n2= parseInt(document.getElementById(num2).value);
     document.getElementById("result").values = n1-n2;
     document.getElementById("mkd").innerHTML+="Subtraction"+(n1-n2);
}

function factorial( n1){
        var f=1;
        for(var i=0;i<=f;i++){
            f=f*i;
        }
        return f;
}

function CalculateResult(){
    var n1= parseInt(document.getElementById("num1").value);
    var n2= parseInt(document.getElementById("num2").value);
    var arr = document.getElementsByName("operation")

    var op;
    for(var ob of arr){
        if(ob.checked){
        op=ob.value;
        break;
        }
    }

    switch(op){
        case "add":var result=(n1+n2);
                    break;

        case "sub": result= n1-n2;
                    break;    
                    
        case "fact":result = factorial(n1);
                    break;               
                }
                document.getElementById("result").value = result;

}
function f1(){
    console.log("Inside function f1");
}

exports.f2 = function(){
    f1()
    console.log("Inside f2 function");
}

exports.user={userid:"7074" , username:"tushar"}
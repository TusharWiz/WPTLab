exports.m1=function(){
    console.log("in function 1")
}

exports.addition=function(a,b){
    return a+b;
}

exports.table=function(num){
    for(var i=1;i<=10;i++){
         console.log(`${num}*${i}=${num*i}`)
    }
}
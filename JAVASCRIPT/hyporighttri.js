
document.getElementById("mybutton").onclick = function(){
    a = document.getElementById("atextbox").value;
    a = Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML = "The value of C is: "+ c;
    
}
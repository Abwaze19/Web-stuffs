document.getElementById("mybutton").onclick = function(){
    const mycheckbox = document.getElementById("mycheckbox");
    const visabtn= document.getElementById("visabtn");
    const mastercardbtn = document.getElementById("mastercardbtn");
    const paypalbtn = document.getElementById("paypalbtn");

    if(mycheckbox.checked){
        console.log("you are subscribed!");
    }
    else{
        console.log("you are not subscribed!");
    }
    if(visabtn.checked){
        console.log("you are paying using visa!");
    }
    else if(mastercardbtn.checked){
        console.log("you are paying using mastercard!");
    }
    else if(paypalbtn.checked){
        console.log("you are paying using paypal!");
    }
    else{
        console.log("select a payment type!");
    }
    
}
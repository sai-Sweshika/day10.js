let U_name="sweety"
let password="sweety@123"
let userNameByPrompt=prompt("enter your name")
let userpasswordprompt=prompt("enter your password")
if(U_name===userNameByPrompt && password===userpasswordprompt){
    alert("you are logged in successfully")
}else{
    alert("wrong credentials entered...... pls check.......")
}

let starthours=18;
let endhours=6;
let flashlight=false;
if(starthours>=18 && endhours<=6){
    flashlight=!flashlight;
    alert('${flashlight}')
}else{
    alert('${flashlight}')
}

let password=prompt("enter your password here with cap,number & symbol (@)");
if(password.length>=8){
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)){
        alert("strong password")
    }else{
        alert("good password")
    }
}
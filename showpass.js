let password = document.querySelector("#pass")
let togglePass = document.querySelector("#show")
let passwordTwo = document.querySelector("#pass2")
let togglePassTwo = document.querySelector("#show2")


togglePass.addEventListener("click", function(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
    }
    else{
        password.setAttribute('type','password');
    }
})

togglePassTwo.addEventListener("click", function(){
    if(passwordTwo.type === 'password'){
        passwordTwo.setAttribute('type', 'text');
    }
    else{
        passwordTwo.setAttribute('type','password');
    }
})
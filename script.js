const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('btnlogin-popup')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})



const subscribeEmail = document.querySelector('.btn-btn-sub')

function subscribeEmail(){
    console.log("SUCESSFULLY SUBCRIBED YOUR EMAIL")
}

subscribeEmail.addEventListener('click')

function entered(){
    alert("LOGGED IN SUCCESSFULLY")
}



function displayMessage(){
    alert("successful")
}

function signupMessage(){
    alert("SIGN UP SUCCESSFUL")
}

function loginMessage(){
    alert("LOG IN SUCESSFUL")
}




function loginCred(){ if(user) { 
    window.location.href = "login.html"

}
else{
    console.log("HTTP REQUEST REJECTED")
}
}


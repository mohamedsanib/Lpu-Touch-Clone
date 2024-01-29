let users = [
    {
        reg : "12219523",
        password : "Pass@123"
    }
]

function visiblePass(){
    const passtext = document.querySelector('#pass-inp');
    const eye_sheid = document.querySelector('.js_active');
    if(passtext.type === "password"){
        passtext.type = "text";
        eye_sheid.innerHTML = `<img class="eye_svg" src="image/eye.svg" alt="hide password">`;
    }
    else{
        passtext.type = "password";
        eye_sheid.innerHTML = `<img class="eye_svg" src="image/eye-slash.svg" alt="hide password">`;
    } 
}

function showPassBox(){
    const pass = document.querySelector('.pass-box');
    pass.classList.add('pass-box-show');
}

function validate(){
    let ans = 0;
    users.forEach((user)=>{
        if((user.reg == reg.value) && (user.password == pass.value)){
            ans = 1;
        }
    })
    return ans;
}

function openDashboard(){
    window.location.replace("dashboard.html");
}

function showPopUp(){
    const overley = document.querySelector('.overlay');
    const pop_up = document.querySelector('.pop-up');
    overley.classList.add('overlay-active');
    pop_up.classList.add('pop-up-active');
}
function hidePopUp(){
    const overley = document.querySelector('.overlay');
    const pop_up = document.querySelector('.pop-up');
    overley.classList.remove('overlay-active');
    pop_up.classList.remove('pop-up-active');
}

function errorPopUp(){
    const pop_content = document.querySelector('.pop-content');
    if(reg.value === "" || pass.value === ""){
        pop_content.innerHTML = "Kindly enter user id and Password";
        showPopUp();
    }
    else{
        pop_content.innerHTML = "Invalid username or password";
        showPopUp();
    }
}

function signIn(){
    
    if(validate()){
        openDashboard();
    }else{
        errorPopUp();
        const reg = document.querySelector('#reg-inp');
        reg.value = "";
        const pass = document.querySelector('#pass-inp');
        pass.value = "";
    }
}

const reg = document.querySelector('#reg-inp');
reg.addEventListener("keydown", showPassBox);

const pass = document.querySelector('#pass-inp');

const sign_in = document.querySelector('.sign-in');
sign_in.addEventListener("click", signIn);

const eye_sheid = document.querySelector('.js_active');
eye_sheid.addEventListener("click", visiblePass);

const pop_btn = document.querySelector('.pop-btn');
const overlay = document.querySelector('.overlay');
pop_btn.addEventListener("click", hidePopUp);
overlay.addEventListener("click", hidePopUp);



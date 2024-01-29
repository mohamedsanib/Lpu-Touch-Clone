const showBottomPopUp = function(){
    const pop_up = document.querySelector('.bottom_pop_up');
    pop_up.classList.remove('js_bottom_pop_up');
}

const removeBottomPopUp = function(){
    const pop_up = document.querySelector('.bottom_pop_up');
    pop_up.classList.add('js_bottom_pop_up');
}

const bp_close_btn = document.querySelector('.bp_close_btn');
bp_close_btn.addEventListener("click", removeBottomPopUp);

const feedback = setTimeout(showBottomPopUp , 3000);